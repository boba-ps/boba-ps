/* eslint-disable import/no-unresolved */
import { currentXorBlob, currentKcpObj, currentPacket } from '../kcpServer';
import { convToPacket, sendPacket } from '../../../utils/packetUtils';
import { getPacketIdByProtoName } from '../../../utils/dataUtil';
import listenerClass from '../../../utils/classes/listenerClass';

class MarkMapReq extends listenerClass {
  constructor() {
    super('MarkMapReq', getPacketIdByProtoName('MarkMapReq'), currentPacket, currentKcpObj!);
  }
  // MarkMap Needed Packets
  //      I'm sure there's more, but can't test
  //      Probably not in order, can't test either
  //
  // SceneEntityAppearNotify (only for tping)
  // ...more

  // MarkMapReq passed info: (Client -> Server)
  // name
  // pos [x, y, z]
  // ...more

  async exec() {
    await this.data.setProtobuf();
    const rsp = {

    };
    sendPacket(await convToPacket('MarkMapRsp', this.kcpObject, rsp), currentXorBlob, currentXorBlob);
  }
}

export default MarkMapReq;
