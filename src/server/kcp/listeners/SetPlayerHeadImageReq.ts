/* eslint-disable import/no-unresolved */
import { currentXorBlob, currentKcpObj, currentPacket } from '../kcpServer';
import { convToPacket, sendPacket } from '../../../utils/packetUtils';
import { getPacketIdByProtoName } from '../../../utils/dataUtil';
import listenerClass from '../../../utils/classes/listenerClass';

class SetPlayerHeadImageReq extends listenerClass {
  constructor() {
    super('SetPlayerHeadImageReq', getPacketIdByProtoName('SetPlayerHeadImageReq'), currentPacket, currentKcpObj!);
  }

  async exec() {
    await this.data.setProtobuf();
    const rsp = {
      avatarId: this.data.protoBuf.avatarId,
      profilePicture: {
        avatarId: this.data.protoBuf.avatarId
      }
    };
    sendPacket(await convToPacket('SetPlayerHeadImageRsp', this.kcpObject, rsp), currentXorBlob, currentXorBlob);
  }
}

export default SetPlayerHeadImageReq;
