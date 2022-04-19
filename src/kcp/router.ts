import type { MessageType, PartialMessage } from "@protobuf-ts/runtime";
import { PacketHead } from "boba-protos";
import type { KcpConnection } from ".";
import { Log } from "../log";
import type { Executor } from "../system";
import { IdMapping } from "../utils/mapping";
import { DataPacket } from "./packet";
import PacketIds from "./packetIds.json";

export type PacketHandler<T extends object> = (context: PacketContext<T>) => Promise<void> | void;

type Route<T extends object> = {
  type: MessageType<T>;
  handlers: PacketHandler<T>[];
};

export class PacketRouter {
  readonly idMap = new IdMapping(PacketIds);
  readonly routes: Partial<Record<keyof typeof PacketIds, Route<any>>> = {};

  on<T extends object>(type: MessageType<T>, handler: PacketHandler<T>) {
    const name = type.typeName;

    if (this.idMap.hasName(name)) {
      const { handlers } = ((this.routes[name] as Route<T>) ??= { type, handlers: [] });
      handlers.push(handler);
    } else {
      Log.warn({ name }, `ignored handler for packet ${name} with unmapped id`);
    }

    return this;
  }

  handle(executor: Executor, connection: KcpConnection, packet: DataPacket) {
    const id = packet.id;
    const name = this.idMap.name(id);

    if (!name) {
      Log.info({ id }, `ignored unmapped packet id ${id}`);
      return false;
    }

    const route = this.routes[name];

    if (!route || !route.handlers.length) {
      Log.info({ id, name }, `ignored packet ${name} with no handler`);
      return false;
    }

    let header, body;

    try {
      header = PacketHead.fromBinary(packet.metadata);
    } catch (err) {
      if (Log.isLevelEnabled("debug")) {
        Log.debug({ id, name, buffer: packet.metadata.toString("hex"), err }, "failed to decode packet header");
      }

      return false;
    }

    try {
      body = route.type.fromBinary(packet.data);
    } catch (err) {
      if (Log.isLevelEnabled("warn")) {
        Log.warn({ id, name, buffer: packet.data.toString("hex"), err }, `failed to decode packet ${name}`);
      }

      return false;
    }

    // let's do something with the packet header in the future
    // this line just exists to prevent unused var linting error
    header;

    if (Log.isLevelEnabled("debug")) {
      Log.debug({ id, name, header, packet: body }, "received packet");
    }

    for (const handler of route.handlers) {
      try {
        handler(new PacketContext(this, executor, header, body, connection));
      } catch (err) {
        Log.warn({ id, name, header, packet: body, err }, "unhandled error in packet handler");
      }
    }

    return true;
  }
}

const EMPTY_BUFFER = Buffer.alloc(0);

export class PacketContext<T extends object> {
  readonly res;

  constructor(
    readonly router: PacketRouter,
    readonly executor: Executor,
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

    if (!this.context.router.idMap.hasName(name)) {
      Log.warn({ name, packet: message }, `ignoring sending packet ${name} with unmapped id`);
      return false;
    }

    const id = this.context.router.idMap.id(name);

    // partial to full message
    message = type.create(message);

    let header, body;

    if (message._header) {
      try {
        header = Buffer.from(
          PacketHead.toBinary(
            PacketHead.create({
              sentMs: BigInt(this.context.executor.clock.now() >>> 0),
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
