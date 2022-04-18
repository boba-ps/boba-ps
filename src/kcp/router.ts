import type { MessageType, PartialMessage } from "@protobuf-ts/runtime";
import { PacketHead } from "boba-protos";
import type { KcpConnection } from ".";
import { Log } from "../log";
import { DataPacket } from "./packet";
import packetIds from "./packetIds.json";

export function getPacketId(name: string) {
  const id = (packetIds as Record<string, string>)[name];
  return id ? parseInt(id) : undefined;
}

export type PacketRouterCallback<T extends object> = (
  message: T,
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
    const name = type.typeName;
    const id = getPacketId(name);

    if (id) {
      const { callbacks } = ((this.map[id] as Route<T>) ??= { type, callbacks: [] });
      callbacks.push(callback);
    } else {
      Log.warn({ name }, `ignored route handler for packet ${name} with unmapped id`);
    }
  }

  handle(connection: KcpConnection, packet: DataPacket) {
    const route = this.map[packet.id];

    if (!route) {
      Log.info({ id: packet.id }, `ignored unknown packet id ${packet.id}`);
      return false;
    }

    const name = route.type.typeName;
    let head, body;

    try {
      head = PacketHead.fromBinary(packet.metadata);
    } catch (err) {
      if (Log.isLevelEnabled("debug")) {
        Log.debug(
          { id: packet.id, name, buffer: packet.metadata.toString("hex"), err },
          "failed to decode packet head"
        );
      }

      return false;
    }

    try {
      body = route.type.fromBinary(packet.data);
    } catch (err) {
      if (Log.isLevelEnabled("warn")) {
        Log.warn({ id: packet.id, name, buffer: packet.data.toString("hex"), err }, `failed to decode packet ${name}`);
      }

      return false;
    }

    // let's do something with the packet head in the future
    // this line just exists to prevent unused var linting error
    head;

    if (Log.isLevelEnabled("debug")) {
      Log.debug({ id: packet.id, name, head, packet: body }, "received packet");
    }

    for (const callback of route.callbacks) {
      try {
        callback(body, new PacketRouterReplyHandler(connection), connection);
      } catch (err) {
        Log.warn({ id: packet.id, packet: body }, "unhandled error in packet router");
      }
    }

    return true;
  }
}

const EMPTY_BUFFER = Buffer.alloc(0);

export class PacketRouterReplyHandler {
  constructor(readonly connection: KcpConnection) {}

  send<T extends object>(type: MessageType<T>, message: PartialMessage<T>) {
    const name = type.typeName;
    const id = getPacketId(name);

    if (!id) {
      Log.warn({ name, packet: message }, `ignoring sending packet ${name} with unmapped id`);
      return false;
    }

    // partial to full message
    message = type.create(message);

    let head, body;
    head = EMPTY_BUFFER;

    try {
      body = Buffer.from(type.toBinary(message as T));
    } catch (err) {
      if (Log.isLevelEnabled("warn")) {
        Log.warn({ id, name, packet: message, err }, `failed to encode packet ${name}`);
      }

      return false;
    }

    if (Log.isLevelEnabled("debug")) {
      Log.debug({ id, name, packet: message }, "sending packet");
    }

    this.connection.send(new DataPacket(id, head, body));
    this.connection.flush();

    return true;
  }
}
