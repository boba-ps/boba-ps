/* eslint-disable import/no-unresolved */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import { KCP } from 'node-kcp';
import { RemoteInfo, Socket } from 'dgram';
import { readdirSync } from 'fs';
import p from 'path';
import { LogTypes, Warn } from '../../../utils/logging';
import { xorData, isValidPacket, parsePacketData } from '../../../utils/dataUtil';
import { Packet } from '../../../utils/packet';
import { udpServer } from '../kcpServer';

export default class {
  serverInstance!:Socket;

  initialKeyBlob!:any;

  xorBlob!:any;

  kcpObj!:KCP;

  constructor(kcpObj:KCP, xorBlob:any) {
    this.serverInstance = udpServer;
    this.kcpObj = kcpObj;
    this.xorBlob = xorBlob;
  }

  // eslint-disable-next-line class-methods-use-this
  async init() {
    const listeners = readdirSync(p.join(__dirname, '..', '/listeners/'));
    this.serverInstance.addListener('message', (msg:Buffer, rinfo:RemoteInfo) => {
      // eslint-disable-next-line guard-for-in
      for (const listener in listeners) {
        (async () => {
          const l = await import(`../listeners/${listener.split(':')[1]}`);
          const recv = this.kcpObj.recv();
          if (recv) {
            const decrypted = xorData(recv, this.xorBlob);
            if (isValidPacket(decrypted)) {
              // eslint-disable-next-line max-len
              const packet = new Packet(parsePacketData(decrypted), decrypted.readUint16BE(2), this.kcpObj);
              if (packet.protoName !== undefined) {
                if (l.protoName === packet.protoName) {
                  l.exec();
                } else {
                  // TO DO: Make Pre-recorded Responses
                  Warn(`Unhandled packet, ID: ${packet.packetID}`, LogTypes.KCP);
                }
              }
            }
          }
        })();
      }
    });
  }
}
