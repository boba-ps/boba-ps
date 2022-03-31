/* eslint-disable no-unused-vars */
import { Socket } from 'dgram';
import { KCP } from 'node-kcp';
// eslint-disable-next-line import/no-unresolved
import { Packet } from '../packet';
// eslint-disable-next-line import/no-unresolved
import { udpServer } from '../../server/kcp/kcpServer';
// this is to make a listener class template

// eslint-disable-next-line no-shadow
export enum protoTypes {
    Req = 'Req',
    Rsp = 'Rsp',
    Notify = 'Notify'
}
export default class {
  protoName!:string[] | string;

  protoType!:protoTypes;

  packetId!:string[] | number[] | string | number;

  kcpObject!: KCP;

  serverInstance!:Socket;

  data!:Packet;

  constructor(protoName:string, packetId:string|number, data:Packet, kcpObject:KCP) {
    this.protoName = protoName;
    this.packetId = packetId;
    this.kcpObject = kcpObject;
    this.serverInstance = udpServer;
    this.data = data;
  }

  // eslint-disable-next-line max-len
  // eslint-disable-next-line class-methods-use-this
  exec() : void {}
}
