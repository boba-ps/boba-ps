/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
import { createSocket, Socket, RemoteInfo } from 'dgram';
// eslint-disable-next-line import/no-unresolved
import { KCP } from 'node-kcp';
// eslint-disable-next-line import/no-unresolved
import { Packet } from '../../utils/packet';
// eslint-disable-next-line import/no-unresolved
import { Warn, Log, LogTypes } from '../../utils/logging';
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import { Handshake } from '../../utils/handshake';
import * as dataUtil from '../../utils/dataUtil';

// external handlers
export const udpServer = createSocket('udp4');

export interface context {
  address: string,
  port: number
}
export const getKcpObj = (data:Buffer, ctx:context) => new KCP(data.readUInt32LE(0), ctx);
export let currentKcpObj:KCP | undefined;
export let currentData:Buffer | undefined;
export let currentToken:number = 0x0;
export let currentPacket:Packet;
export class kcpServer {
  public port!:number;

  public token:number = 0x0;

  private server: Socket;

  static initialKeyBlob: Buffer;

  static keyBlob: Buffer | undefined = undefined;

  private seedKey!:any;

  clients:{[key:string]: any} = {};
  constructor(port:number) {
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
      currentKcpObj = kcpObj;
      this.clients[activeClient] = kcpObj;
      this.token = msg.readUint32BE(4);
      currentToken = this.token;
      const formattedPacket = dataUtil.reformatKcpPacket(msg);
      kcpObj.input(formattedPacket);
      kcpObj.update(Date.now());

      const recv = kcpObj.recv();
      if (recv) {
        const xorBlob = kcpServer.initialKeyBlob || kcpServer.keyBlob;
        const decryptedData = dataUtil.xorData(recv, xorBlob);

        if (dataUtil.isValidPacket(decryptedData)) {
          const packet = new Packet(
            dataUtil.parsePacketData(decryptedData),
            decryptedData.readUInt16BE(2),
            kcpObj,
          );
          currentPacket = packet;
          if (packet.protoName !== undefined) await packet.setProtobuf();
        }
      }
    }
  }
}
