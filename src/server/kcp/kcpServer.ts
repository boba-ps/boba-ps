import { createSocket, Socket } from 'dgram';
// eslint-disable-next-line import/no-unresolved
import { Warn, Log, LogTypes } from '../../utils/logging';
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import { Handshake } from '../../utils/handshake';

export class kcpServer {
  public port!:number;

  public token:number = 0x0;

  private server: Socket;

  static initialKeyBlob: Buffer;

  static keyBlob: Buffer | undefined = undefined;

  private seedKey!:any;

  constructor(port:number) {
    this.port = port;
    this.server = createSocket('udp4');
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
        // im gonna do this tomorrow
        // @ts-expect-error
        // eslint-disable-next-line no-use-before-define
        const handshake = new Handshake(handshake.MAGIC_DISCONNECT);

        this.seedKey = undefined;

        return handshake;
      default:
        Warn(`Unhandled handshake ${type}`, LogTypes.KCP);
    }
  }
}
