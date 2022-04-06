/* eslint-disable import/no-unresolved */
import { KcpServer } from '../kcpServer';
import { convToPacket, sendPacket } from '../../../utils/packetUtils';
import { getPacketIdByProtoName } from '../../../utils/dataUtil';
import listenerClass from '../../../utils/classes/listenerClass';

class PlayerSetPauseReq extends listenerClass {
  constructor() {
    super('PlayerSetPauseReq', getPacketIdByProtoName('PlayerSetPauseReq'), KcpServer.currentPacket!, KcpServer.currentKcpObj!);
  }

  async exec() {
    await this.data.setProtobuf();
    const rsp = {
      retcode: 0,
    };
    sendPacket(await convToPacket('PlayerSetPauseRsp', this.kcpObject, rsp), KcpServer.currentXorBlob, KcpServer.currentXorBlob);
  }
}

export default PlayerSetPauseReq;
