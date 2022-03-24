import { createSocket, Socket } from 'dgram';
// eslint-disable-next-line import/no-unresolved
import { Warn, Log, LogTypes } from '../../utils/logging';
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import { Handshake } from '../../utils/handshake';
import * as dataUtil from '../../utils/dataUtil';

// external handlers
export const udpServer = createSocket('udp4');
export class kcpServer {
  public port!:number;

  public token:number = 0x0;

  private server: Socket;

  static initialKeyBlob: Buffer;

  static keyBlob: Buffer | undefined = undefined;

  private seedKey!:any;

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
}
