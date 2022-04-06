import { config } from 'dotenv';
/* eslint-disable max-len */
/* eslint-disable new-cap */
/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import { createSocket, Socket, RemoteInfo } from 'dgram';
import { KCP } from 'node-kcp';
import { Packet } from '../../utils/packet';
import {
  Warn, Log, LogTypes, Err,
} from '../../utils/logging';
import { Handshake } from '../../utils/handshake';
import * as dataUtil from '../../utils/dataUtil';
import listenerHandler from './handlers/listenerHandler';

// external handlers
export const udpServer = createSocket('udp4');

export interface context {
  address: string,
  port: number
}
export const getKcpObj = (data:Buffer, ctx:context) => new KCP(data.readUInt32LE(0), ctx);

export class kcpServer {
  public port!:number;

  public token:number = 0x0;

  private server: Socket;

  static initialKeyBlob: Buffer;

  static keyBlob: Buffer | undefined = undefined;

  public host!:string;

  public currentKcpObj:KCP | undefined;

  public currentData:Buffer | undefined;

  public currentXorBlob:any;

  public currentPacket:Packet | undefined;

  private seedKey!:any;

  private _activeClient!:string;

  clients:{[key:string]: any} = {};
  constructor(port:number, host:string) {
    this.host = host;
    this.port = port;
    this.server = udpServer;
  }

  handleHandshake(data:any, type:number) {
    Log(data, LogTypes.KCP);
    switch (type) {
      case 255:
        const hs:Handshake = new Handshake();
        const buff = Buffer.from(data);
        hs.decode(buff);

        const _conv = Date.now();
        const _token = 0xFFCCEEBB ^ ((Date.now() >> 32) & 0xFFFFFFFF);
        const newBuf = new Handshake([0x145, 0x14514545], _conv, _token);

        return newBuf;
      case 404:
        const handshake = new Handshake([0x194, 0x19419494]);

        this.seedKey = undefined;

        return handshake;
      default:
        Warn(`Unhandled handshake ${type}`, LogTypes.KCP);
    }
  }

  async output(data: Buffer, size: number, context: any) {
    if (data === undefined || data === null) return;
    if (data.length > 26) {
      // eslint-disable-next-line no-restricted-syntax
      for (const k of await dataUtil.formatPacket(data, this.token)) {
        this.server.send(k, 0, k.length, context.port, context.address);
      }
      return;
    }
    this.server.send(data, 0, size, context.port, context.address);
  }
  async onMessage(msg:Buffer, rinfo:RemoteInfo) {
    const activeClient:string = `${rinfo.address}_${rinfo.port}_${msg.readUint32LE(0).toString(16)}`;
    const buffer = Buffer.from(msg);
    this._activeClient = activeClient;
    if (msg.byteLength <= 20) {
      const ret = this.handleHandshake(buffer, buffer.readInt32BE(0));
      ret?.encode();
      const returnBuffer = ret?.Buffer as Buffer;
      this.server.send(returnBuffer, 0, returnBuffer.byteLength, rinfo.port, rinfo.address);
      Log('Handshake Handled!', LogTypes.KCP);
    }
    if (this.clients[activeClient] === undefined) {
      const kcpObj = getKcpObj(msg, { address: rinfo.address, port: rinfo.port });

      kcpObj.nodelay(1, 10, 2, 1);
      kcpObj.output(this.output);
      this.currentKcpObj = kcpObj;

      this.clients[activeClient] = kcpObj;
      this.token = msg.readUint32BE(4);
      const formattedPacket = dataUtil.reformatKcpPacket(msg);
      kcpObj.input(formattedPacket);
      kcpObj.update(Date.now());

      const recv = kcpObj.recv();
      if (recv) {
        const xorBlob = kcpServer.initialKeyBlob || kcpServer.keyBlob;
        this.currentXorBlob = xorBlob;
        const decryptedData = dataUtil.xorData(recv, xorBlob);

        if (dataUtil.isValidPacket(decryptedData)) {
          const packet = new Packet(
            dataUtil.parsePacketData(decryptedData),
            decryptedData.readUInt16BE(2),
            kcpObj,
          );
          this.currentPacket = packet;
          if (packet.protoName !== undefined) await packet.setProtobuf();
        }
      }
    }
  }

  async start() {
    this.server.bind(this.port, this.host);

    this.server.on('listening', async () => {
      this.server.address();
      Log(`KCP Server is listening at port ${this.port}`, LogTypes.KCP);
      const _listenerHandler = new listenerHandler(this.currentKcpObj ?? this.clients.activeClient, kcpServer.initialKeyBlob ?? kcpServer.keyBlob);
      await _listenerHandler.init();
    });

    this.server.on('message', async (msg, rinfo) => {
      await this.onMessage(msg, rinfo);
    });

    this.server.on('error', (e) => {
      Err(e.message, LogTypes.KCP);
    });
  }
}

config();

export const KcpServer = new kcpServer(Number(process.env.KCP_PORT) ?? 22102, process.env.HOST ?? 'localhost');
