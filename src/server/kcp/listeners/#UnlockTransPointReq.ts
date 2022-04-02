/* eslint-disable import/no-unresolved */
import { currentXorBlob, currentKcpObj, currentPacket } from '../kcpServer';
import { convToPacket, sendPacket } from '../../../utils/packetUtils';
import { getPacketIdByProtoName } from '../../../utils/dataUtil';
import listenerClass from '../../../utils/classes/listenerClass';

class UnlockTransPointReq extends listenerClass {
  constructor() {
    super('UnlockTransPointReq', getPacketIdByProtoName('UnlockTransPointReq'), currentPacket, currentKcpObj!);
  }

  // Unlock Transport Point Needed Packets
  //    Probably not in order, can't test
  // 
  // ScenePointUnlockNotify <- this does not get called nowhere else, afaik
  // UnlockTransPointRsp

  async exec() {
    await this.data.setProtobuf();
    const rsp = {
      sceneId: 3, // Is this constant? I'm not sure, I think it's hardcoded...
      pointId: parseInt(this.data.protoBuf.pointId)
    };
    sendPacket(await convToPacket('UnlockTransPointRsp', this.kcpObject, rsp), currentXorBlob, currentXorBlob);
  }
}

export default UnlockTransPointReq;
