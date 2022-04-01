/* eslint-disable import/no-unresolved */
import { currentXorBlob, currentKcpObj, currentPacket } from '../kcpServer';
import { convToPacket, sendPacket } from '../../../utils/packetUtils';
import { getPacketIdByProtoName } from '../../../utils/dataUtil';
import listenerClass from '../../../utils/classes/listenerClass';

class GetPlayerTokenReq extends listenerClass {
  constructor() {
    super('GetPlayerTokenReq', getPacketIdByProtoName('GetPlayerToken'), currentPacket, currentKcpObj!);
  }

  async exec() {
    await this.data.setProtobuf();
    const rsp = {
      secretKeySeed: 2,
      accountUid: this.data.protoBuf.accountUid,
    };
    sendPacket(await convToPacket('GetPlayerTokenRsp', this.kcpObject, rsp), currentXorBlob, currentXorBlob);
  }
}

export default GetPlayerTokenReq;
