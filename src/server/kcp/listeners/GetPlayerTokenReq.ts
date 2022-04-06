/* eslint-disable import/no-unresolved */
import { KcpServer } from '../kcpServer';
import { convToPacket, sendPacket } from '../../../utils/packetUtils';
import { getPacketIdByProtoName } from '../../../utils/dataUtil';
import listenerClass from '../../../utils/classes/listenerClass';

class GetPlayerTokenReq extends listenerClass {
  constructor() {
    super('GetPlayerTokenReq', getPacketIdByProtoName('GetPlayerToken'), KcpServer.currentPacket!, KcpServer.currentKcpObj!);
  }

  async exec() {
    await this.data.setProtobuf();
    const rsp = {
      secretKeySeed: 2,
      accountUid: this.data.protoBuf.accountUid,
    };
    sendPacket(await convToPacket('GetPlayerTokenRsp', this.kcpObject, rsp), KcpServer.currentXorBlob, KcpServer.currentXorBlob);
  }
}

export default GetPlayerTokenReq;
