import kcp from 'node-kcp';
// eslint-disable-next-line import/no-unresolved
import * as dataUtil from './dataUtil';

export class Packet {
  packetID: number;

  dataLength: number;

  protoName: string;

  protoBuf: any;

  constructor(
      public data: Buffer,
      packetID: number | string,
      // eslint-disable-next-line no-unused-vars
      public kcpobj: kcp.KCP,
  ) {
    this.packetID = typeof packetID === 'number'
      ? packetID
      : Number(dataUtil.getPacketIdByProtoName(packetID));

    this.dataLength = data.length;
    this.protoName = dataUtil.getProtoNameByPacketId(
      this.packetID.toString(),
    );
  }

  async setProtobuf() {
    this.protoBuf = await dataUtil.dataToProtobuf(
      this.data,
      this.packetID.toString(),
    );
  }

  decrypt(xorBlob: Buffer) {
    this.data = dataUtil.xorData(this.data, xorBlob);
  }
}
