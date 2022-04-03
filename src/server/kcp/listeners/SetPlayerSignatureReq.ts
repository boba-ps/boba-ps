/* eslint-disable import/no-unresolved */
import { currentXorBlob, currentKcpObj, currentPacket } from '../kcpServer';
import { convToPacket, sendPacket } from '../../../utils/packetUtils';
import { getPacketIdByProtoName } from '../../../utils/dataUtil';
import listenerClass from '../../../utils/classes/listenerClass';

class SetPlayerSignatureReq extends listenerClass {
  constructor() {
    super('SetPlayerSignatureReq', getPacketIdByProtoName('SetPlayerSignatureReq'), currentPacket, currentKcpObj!);
  }

  async exec() {
    await this.data.setProtobuf();
    const rsp = {
      retcode: 0,
      signature: this.data.protoBuf.signature,
    };
    sendPacket(await convToPacket('SetPlayerSignatureRsp', this.kcpObject, rsp), currentXorBlob, currentXorBlob);
  }
}

export default SetPlayerSignatureReq;
