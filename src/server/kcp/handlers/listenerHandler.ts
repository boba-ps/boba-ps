/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import { KCP } from 'node-kcp';
import { RemoteInfo, Socket } from 'dgram';
import { readdirSync } from 'fs';
import p from 'path';
// eslint-disable-next-line import/no-unresolved
import { udpServer } from '../kcpServer';

export default class {
  serverInstance!:Socket;

  initialKeyBlob!:any;

  keyBlob!:any;

  kcpObj!:KCP;

  constructor(kcpObj:KCP) {
    this.serverInstance = udpServer;
    this.kcpObj = kcpObj;
  }

  // eslint-disable-next-line class-methods-use-this
  async init() {
    const listeners = readdirSync(p.join(__dirname, '..', '/listeners/'));
    this.serverInstance.on('message', (msg:Buffer, rinfo:RemoteInfo) => {
      if (msg === undefined ?? null) return;
      // eslint-disable-next-line guard-for-in
      for (const listener in listeners) {
        (async () => {
          const l = await import(`../listeners/${listener}`);
        })();
      }
    });
  }
}
