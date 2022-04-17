import { cloneBuffer, Ec2bKey, xorBuffer } from "../crypto";
import { MT19937_64 } from "../crypto/mt64";
import { Log } from "../log";
import { ConnectPacket, DisconnectPacket, EstablishPacket, HandshakePacket } from "./handshake";
import { getConv, getToken, Kcp } from "kcp-ts";
import { UdpPacket, UdpServer } from "./udp";
import type { Clock } from "../utils/clock";
import type { Config } from "../config";
import { CustomError } from "ts-custom-error";
import { Executor, ServiceBase } from "../system";
import { DataPacket } from "./packet";
import { PacketRouter } from "./router";

export abstract class KcpHandler extends ServiceBase<KcpServer> {}

export class KcpError extends CustomError {
  constructor(readonly code: number, message?: string) {
    super(message);
  }
}

export class KcpServer extends ServiceBase<Executor> {
  readonly udp;
  readonly connections;
  readonly router;

  // optimization
  readonly sharedBuffer;
  readonly sharedMt;

  constructor(readonly config: Config, readonly clock: Clock, readonly ec2b: Ec2bKey) {
    super();

    this.udp = new UdpServer({ type: "udp4" });
    this.connections = new KcpConnectionManager(this);
    this.router = new PacketRouter();

    this.sharedBuffer = Buffer.alloc(config.get("kcp.recvBufSize"));
    this.sharedMt = new MT19937_64();
  }

  protected setup(exec: Executor) {
    exec.once(async () => {
      const host = this.config.get("kcp.host");
      const port = this.config.get("kcp.port");

      await this.udp.bind(host, port);
      Log.info(`Server listening at udp://${host}:${port}`);
    });

    exec.tick(() => {
      for (const packet of this.udp) {
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
    });

    exec.every(100, () => {
      this.connections.update();
    });

    exec.end(async () => {
      await this.udp.close();
    });
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
        if (Log.isLevelEnabled("debug")) {
          Log.debug(
            { buffer: buffer.toString("hex"), address, port, conv, token, read },
            "received malformed kcp packet"
          );
        }

        return;
      }

      if (Log.isLevelEnabled("trace")) {
        Log.trace({ buffer: buffer.toString("hex"), address, port, conv, token }, "processed kcp packet");
      }

      for (const packet of connection) {
        this.handleDataPacket(connection, packet);
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

  private handleDataPacket(connection: KcpConnection, buffer: Buffer) {
    const packet = DataPacket.decode(buffer);

    if (packet) {
      this.router.handle(connection, packet);
    } else {
      if (Log.isLevelEnabled("debug")) {
        Log.debug({ buffer: buffer.toString("hex"), connection }, "received malformed data packet");
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
    for (const connection of this) {
      // TODO: dead connection handling
      connection.kcp.update(connection.clock.now());
    }
  }

  *[Symbol.iterator]() {
    for (const connections of Object.values(this.store)) {
      for (const connection of connections) {
        yield connection;
      }
    }
  }
}

export class KcpConnectionEncryptor {
  private key;

  constructor(readonly server: KcpServer) {
    this.key = server.ec2b.key;
  }

  cipher(buffer: Buffer) {
    xorBuffer(this.key, buffer);
  }

  seed(seed: bigint) {
    const mt = this.server.sharedMt;

    mt.seed(seed);
    mt.seed(mt.next());
    mt.next();

    this.key = Buffer.allocUnsafe(0x1000);

    for (let i = 0; i < 0x1000; i += 8) {
      this.key.writeBigUInt64BE(mt.next(), i);
    }
  }
}

export class KcpConnection {
  readonly kcp;
  readonly encryptor;

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
      this.sendRaw(cloneBuffer(buffer));
    });

    this.kcp.setWndSize(1024, 1024);
    this.encryptor = new KcpConnectionEncryptor(manager.server);
  }

  get connected() {
    return !this.kcp.isDeadLink();
  }

  /** Sends the given packet on the KCP connection. */
  send(buffer: Buffer) {
    const encrypted = cloneBuffer(buffer);
    this.encryptor.cipher(encrypted);
    this.kcp.send(encrypted);
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

    const decrypted = cloneBuffer(buffer.slice(0, read));
    this.encryptor.cipher(decrypted);
    return decrypted;
  }

  /** Flushes all pending data in the KCP send buffer. */
  flush() {
    this.kcp.flush();
  }

  *[Symbol.iterator]() {
    let packet;
    while ((packet = this.recv())) {
      yield packet;
    }
  }
}
