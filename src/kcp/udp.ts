import { createSocket, RemoteInfo, SocketOptions } from "dgram";
import { Log } from "../log";
import { Channel } from "../utils/async";

export type UdpPacket = {
  buffer: Buffer;
  address: string;
  port: number;
};

/// Asynchronous UDP socket wrapper.
export class UdpServer {
  readonly socket;

  private closed = false;
  private readonly recvQueue = new Channel<UdpPacket>();

  constructor(options: SocketOptions) {
    this.socket = createSocket(options, this.handleMessage.bind(this));
    this.socket.on("error", (err) => Log.error({ err }, "unhandled error on udp socket"));
  }

  async bind(host: string, port: number) {
    if (this.closed) throw Error("cannot rebind closed udp socket");
    await new Promise<void>((res) => this.socket.bind({ port, address: host }, res));
  }

  async close() {
    this.closed = true;
    this.recvQueue.close();
    await new Promise<void>((res) => this.socket.close(res));
  }

  private handleMessage(buffer: Buffer, { address, port }: RemoteInfo) {
    if (this.closed) return;
    this.recvQueue.send({ buffer, address, port }).catch(() => {});
  }

  send(packet: UdpPacket) {
    if (this.closed) return;

    const { buffer, port, address } = packet;
    this.socket.send(buffer, port, address);
  }

  async recv() {
    if (this.closed) return;
    return await this.recvQueue.recv();
  }

  async *[Symbol.asyncIterator]() {
    let packet;
    while ((packet = await this.recv())) {
      yield packet;
    }
  }
}
