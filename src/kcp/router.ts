/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
import type { MessageType, PartialMessage } from '@protobuf-ts/runtime';
import { PacketHead } from 'boba-protos';
import type { KcpConnection } from '.';
import { Log } from '../log';
import type { DataPacket } from './packet';
import packetIds from './packetIds.json';

export function getPacketId(name: string) {
  const id = (packetIds as Record<string, string>)[name];
  return id ? parseInt(id) : undefined;
}

export type PacketRouterCallback<T extends object> = (
  message: PartialMessage<T>,
  reply: PacketRouterReplyHandler,
  connection: KcpConnection
) => Promise<void> | void;

type Route<T extends object> = {
  type: MessageType<T>;
  callbacks: PacketRouterCallback<T>[];
};

export class PacketRouter {
  private readonly map: Record<number, Route<any>> = {};

  on<T extends object>(type: MessageType<T>, callback: PacketRouterCallback<T>) {
    const packetName = type.typeName;
    const id = getPacketId(packetName);

    if (id) {
      // eslint-disable-next-line no-multi-assign
      const { callbacks } = ((this.map[id] as Route<T>) ??= { type, callbacks: [] });
      callbacks.push(callback);
    } else {
      Log.warn({ packetName }, `ignored route handler for packet ${packetName} with unmapped id`);
    }
  }

  handle(connection: KcpConnection, packet: DataPacket) {
    const route = this.map[packet.id];

    if (!route) {
      Log.info({ id: packet.id }, `ignored unknown packet id ${packet.id}`);
      return false;
    }

    let head;
    let body;

    try {
      head = PacketHead.fromBinary(packet.metadata);
    } catch (err) {
      if (Log.isLevelEnabled('debug')) {
        Log.debug({ id: packet.id, buffer: packet.metadata.toString('hex'), err }, 'failed to decode packet head');
      }

      return false;
    }

    try {
      body = route.type.fromBinary(packet.data);
    } catch (err) {
      if (Log.isLevelEnabled('warn')) {
        Log.warn(
          { id: packet.id, buffer: packet.data.toString('hex'), err },
          `failed to decode packet ${route.type.typeName}`,
        );
      }

      return false;
    }

    // let's do something with the packet head in the future
    // this line just exists to prevent unused var linting error
    // eslint-disable-next-line no-unused-expressions
    head;

    for (const callback of route.callbacks) {
      try {
        callback(body, new PacketRouterReplyHandler(connection), connection);
      } catch (err) {
        Log.warn({ id: packet.id, packet: body }, 'unhandled error in packet router');
      }
    }

    return true;
  }
}

export class PacketRouterReplyHandler {
  // eslint-disable-next-line no-useless-constructor
  constructor(readonly connection: KcpConnection) {}

  send<T extends object>(type: MessageType<T>, message: PartialMessage<T>) {
    this.connection.send(Buffer.from(type.toBinary(type.create(message))));
    this.connection.flush();
  }
}
