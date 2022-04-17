import type { Ec2bKey } from "../crypto";
import { MT19937_64 } from "../crypto/mt64";
import { Log } from "../log";
import { ConnectPacket, DisconnectPacket, EstablishPacket, HandshakePacket } from "./handshake";
import { getConv, getToken, Kcp } from "kcp-ts";
import { UdpPacket, UdpServer } from "./udp";
import type { Clock } from "../utils/clock";
import { sleep } from "../utils/async";
import type { Config } from "../config";
import { CustomError } from "ts-custom-error";

export class KcpError extends CustomError {
  constructor(readonly code: number, message?: string) {
    super(message);
  }
}

export abstract class KcpHandler {
  abstract setup(server: KcpServer): void;
}

export class KcpServer {
  readonly udp;
  readonly connections;
  readonly sharedBuffer;

  private closed = false;

  constructor(readonly config: Config, readonly clock: Clock, readonly ec2b: Ec2bKey) {
    this.udp = new UdpServer({ type: "udp4" });
    this.connections = new KcpConnectionManager(this);
    this.sharedBuffer = Buffer.alloc(config.get("kcp.recvBufSize"));
  }

  register(handler: KcpHandler) {
    handler.setup(this);
    return this;
  }

  async run(host: string, port: number) {
    await this.udp.bind(host, port);

    try {
      Log.info(`Server listening at udp://${host}:${port}`);
      await Promise.all([this.runReceive(), this.runUpdate()]);
    } finally {
      await this.udp.close();
    }
  }

  stop() {
    this.closed = true;
    this.udp.close();
  }

  private async runReceive() {
    for await (const packet of this.udp) {
      try {
        const handshake = HandshakePacket.decode(packet.buffer);

        if (handshake) {
          this.handleHandshake(packet, handshake);
        } else {
          this.handleKcpPacket(packet);
        }
      } catch {
        Log.error({ packet }, "unhandled error in udp packet handler");
      }
    }
  }

  private async runUpdate() {
    while (!this.closed) {
      this.connections.update();
      await sleep(100);
    }
  }

  private handleHandshake({ address, port }: UdpPacket, handshake: HandshakePacket) {
    if (handshake instanceof ConnectPacket) {
      Log.trace({ handshake }, "received connect handshake");

      const connection = this.connections.create(address, port);
      const response = new EstablishPacket(connection.conv, connection.token);

      connection.sendRaw(response.encode());
    } else if (handshake instanceof DisconnectPacket) {
      // TODO: handle disconnect
      Log.trace({ handshake }, "received disconnect handshake");
    } else {
      Log.debug({ handshake }, "ignored unexpected handshake");
    }
  }

  private handleKcpPacket({ buffer, address, port }: UdpPacket) {
    const conv = getConv(buffer);
    const token = getToken(buffer);
    const connection = this.connections.get(address, port, conv, token);

    if (connection) {
      const read = connection.kcp.input(buffer);

      if (read === -1 || read === -2 || read === -3) {
        Log.debug(
          { buffer: buffer.toString("hex"), address, port, conv, token, read },
          "received malformed kcp packet"
        );
      } else if (read < 0) {
        Log.warn(
          { buffer: buffer.toString("hex"), address, port, conv, token, read },
          `unknown kcp error ${read} during processing`
        );
      } else if (read !== buffer.length) {
        Log.debug(
          { buffer: buffer.toString("hex"), address, port, conv, token, read },
          `ignored ${buffer.length - read} superfluous bytes from kcp packet`
        );
      } else {
        if (Log.isLevelEnabled("trace")) {
          Log.trace({ buffer: buffer.toString("hex"), address, port, conv, token }, "processed kcp packet");
        }
      }
    } else {
      if (Log.isLevelEnabled("trace")) {
        Log.trace(
          { buffer: buffer.toString("hex"), address, port, conv, token },
          "ignored kcp packet from unknown connection"
        );
      }
    }
  }
}

export class KcpConnectionManager {
  private readonly store: Record<string, KcpConnection[]> = {};
  private readonly rand = new MT19937_64();

  constructor(readonly server: KcpServer) {
    this.rand.seed(BigInt(Date.now()));
  }

  create(address: string, port: number) {
    const clock = this.server.clock.withStart(0);
    const id = this.rand.next();
    const conv = Number(id >> 32n);
    const token = Number(id & 0xffffffffn);
    const connection = new KcpConnection(this, clock, address, port, conv, token);

    this.store[address] = [...(this.store[address] || []), connection];
    return connection;
  }

  get(address: string, port: number, conv: number, token: number) {
    return (this.store[address] || []).find((c) => c.port === port && c.conv === conv && c.token === token);
  }

  update() {
    for (const connections of Object.values(this.store)) {
      for (const connection of connections) {
        // TODO: dead connection handling
        connection.kcp.update(connection.clock.now());
      }
    }
  }
}

export class KcpConnection {
  readonly kcp;

  constructor(
    readonly manager: KcpConnectionManager,
    readonly clock: Clock,
    readonly address: string,
    readonly port: number,
    readonly conv: number,
    readonly token: number
  ) {
    this.kcp = new Kcp(conv, token, (buffer) => {
      // kcp buffer must be cloned because it is reused internally
      const packet = Buffer.allocUnsafe(buffer.length);
      buffer.copy(packet);
      this.sendRaw(packet);
    });
  }

  get connected() {
    return !this.kcp.isDeadLink();
  }

  /** Sends the given packet on the KCP connection. */
  send(buffer: Buffer) {
    this.kcp.send(buffer);
  }

  /** Sends the given packet directly on the underlying UDP "connection". */
  sendRaw(buffer: Buffer) {
    return this.manager.server.udp.send({ buffer, address: this.address, port: this.port });
  }

  /** Receives a single KCP packet. */
  recv() {
    const buffer = this.manager.server.sharedBuffer;
    const read = this.kcp.recv(buffer);

    switch (read) {
      case -1:
      case -2:
        // nothing in rcv_queue
        return;

      case -3:
        throw new KcpError(read, "kcp read buffer is too small");
    }

    if (read < 0) {
      throw new KcpError(read, "unknown error");
    }

    // shared buffer will be reused; let's copy
    const copy = Buffer.allocUnsafe(read);
    buffer.copy(copy);
    return copy;
  }

  /** Flushes all pending data in the KCP send buffer. */
  flush() {
    this.kcp.flush();
  }
}
