/* eslint-disable import/no-unresolved */
import { KcpServer } from '../kcpServer';
import { convToPacket, sendPacket } from '../../../utils/packetUtils';
import { getPacketIdByProtoName } from '../../../utils/dataUtil';
import listenerClass from '../../../utils/classes/listenerClass';

class PingReq extends listenerClass {
  constructor() {
    super('PingReq', getPacketIdByProtoName('PingReq'), KcpServer.currentPacket!, KcpServer.currentKcpObj!);
  }

  async exec() {
    await this.data.setProtobuf();
    const rsp = {
      clientTime: this.data.protoBuf.clientTime,
      ueTime: this.data.protoBuf.ueTime,
    };
    sendPacket(await convToPacket('PingRsp', this.kcpObject, rsp), KcpServer.currentXorBlob, KcpServer.currentXorBlob);
  }
}

export default PingReq;
