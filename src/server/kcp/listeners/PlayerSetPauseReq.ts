/* eslint-disable import/no-unresolved */
import { currentXorBlob, currentKcpObj, currentPacket } from '../kcpServer';
import { convToPacket, sendPacket } from '../../../utils/packetUtils';
import { getPacketIdByProtoName } from '../../../utils/dataUtil';
import listenerClass from '../../../utils/classes/listenerClass';

class PlayerSetPauseReq extends listenerClass {
  constructor() {
    super('PlayerSetPauseReq', getPacketIdByProtoName('PlayerSetPauseReq'), currentPacket, currentKcpObj!);
  }

  async exec() {
    await this.data.setProtobuf();
    const rsp = {
      retcode: 0
    };
    sendPacket(await convToPacket('PlayerSetPauseRsp', this.kcpObject, rsp), currentXorBlob, currentXorBlob);
  }
}

export default PlayerSetPauseReq;
