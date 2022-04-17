import type { MessageType } from "@protobuf-ts/runtime";
import { Log } from "../log";
import packetIds from "./packetIds.json";

export function getPacketId(name: string) {
  const id = (packetIds as Record<string, string>)[name];
  return id ? parseInt(id) : undefined;
}

type Handler<T extends object> = {
  type: MessageType<T>;
  callbacks: HandlerCallback<T>[];
};

type HandlerCallback<T extends object> = (message: T) => Promise<void> | void;

export class PacketRouter {
  private readonly map: Record<number, Handler<any>> = {};

  on<T extends object>(type: MessageType<T>, callback: HandlerCallback<T>) {
    const packetName = type.typeName;
    const id = getPacketId(packetName);

    if (id) {
      const { callbacks } = ((this.map[id] as Handler<T>) ??= { type, callbacks: [] });
      callbacks.push(callback);
    } else {
      Log.warn({ packetName }, `id mapping for packet ${packetName} is not defined`);
    }
  }
}
