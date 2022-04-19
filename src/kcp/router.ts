import type { MessageType, PartialMessage } from "@protobuf-ts/runtime";
import { PacketHead } from "boba-protos";
import type { KcpConnection } from ".";
import { Log } from "../log";
import type { Executor } from "../system";
import { DataPacket } from "./packet";
import packetIds from "./packetIds.json";

export function getPacketId(name: string) {
  return (packetIds as Record<string, number>)[name];
}

export type PacketRouterCallback<T extends object> = (context: PacketContext<T>) => Promise<void> | void;

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

    return this;
  }

  handle(exec: Executor, connection: KcpConnection, packet: DataPacket) {
    const route = this.map[packet.id];

    if (!route) {
      Log.info({ id: packet.id }, `ignored unknown packet id ${packet.id}`);
      return false;
    }

    const name = route.type.typeName;
    let header, body;

    try {
      header = PacketHead.fromBinary(packet.metadata);
    } catch (err) {
      if (Log.isLevelEnabled("debug")) {
        Log.debug(
          { id: packet.id, name, buffer: packet.metadata.toString("hex"), err },
          "failed to decode packet header"
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

    // let's do something with the packet header in the future
    // this line just exists to prevent unused var linting error
    header;

    if (Log.isLevelEnabled("debug")) {
      Log.debug({ id: packet.id, name, header, packet: body }, "received packet");
    }

    for (const callback of route.callbacks) {
      try {
        callback(new PacketContext(exec, header, body, connection));
      } catch (err) {
        Log.warn({ id: packet.id, name, header, packet: body, err }, "unhandled error in packet route");
      }
    }

    return true;
  }
}

const EMPTY_BUFFER = Buffer.alloc(0);

export class PacketContext<T extends object> {
  readonly res;

  constructor(
    readonly exec: Executor,
    readonly header: PacketHead,
    readonly req: T,
    readonly connection: KcpConnection
  ) {
    this.res = new PacketRouterResponse(this);
  }
}

export class PacketRouterResponse<T extends object> {
  constructor(private readonly context: PacketContext<T>) {}

  send<T extends object>(type: MessageType<T>, message: PartialMessage<T> & { _header?: PartialMessage<PacketHead> }) {
    const name = type.typeName;
    const id = getPacketId(name);

    if (!id) {
      Log.warn({ name, packet: message }, `ignoring sending packet ${name} with unmapped id`);
      return false;
    }

    // partial to full message
    message = type.create(message);

    let header, body;

    if (message._header) {
      try {
        header = Buffer.from(
          PacketHead.toBinary(
            PacketHead.create({
              sentMs: BigInt(this.context.exec.clock.now() >>> 0),
              ...message._header,
            })
          )
        );
      } catch (err) {
        if (Log.isLevelEnabled("warn")) {
          Log.warn({ id, name, packet: message, err }, "failed to encode packet header");
        }

        return false;
      }
    } else {
      header = EMPTY_BUFFER;
    }

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

    this.context.connection.send(new DataPacket(id, header, body));
    this.context.connection.flush();

    return true;
  }
}
