/* eslint-disable import/no-unresolved */
import { KcpServer } from '../kcpServer';
import { convToPacket, sendPacket } from '../../../utils/packetUtils';
import { getPacketIdByProtoName } from '../../../utils/dataUtil';
import listenerClass from '../../../utils/classes/listenerClass';

class PlayerLoginReq extends listenerClass {
  constructor() {
    super('PlayerLoginReq', getPacketIdByProtoName('PlayerLoginReq'), KcpServer.currentPacket!, KcpServer.currentKcpObj!);
  }
  // Login Sequence Needed Packets
  //      There's probably more too, can't test
  //      Probably not in order, can't test either
  //
  // AvatarDataNotify
  // ActivityScheduleInfoNotify
  // PlayerPropNotify
  // PlayerDataNotify
  // AchievementUpdateNotify
  // OpenStateUpdateNotify
  // PlayerStoreNotify
  // AvatarSatiationDataNotify
  // RegionSearchNotify
  // PlayerEnterSceneNotify
  // PlayerLoginRsp

  // PlayerLoginReq passed info: (Client -> Server)
  // token
  // clientVersion
  // systemVersion
  // deviceName
  // deviceUuid
  // languageType
  // accountType
  // deviceInfo
  // platformType
  // checksum
  // securityCmdReply (buffer)
  // cps (?)
  // checksumClientVersion
  // clientDataVersion
  // clientVersionHash

  async exec() {
    await this.data.setProtobuf();

    const rsp = {
      // I cannot get playerloginrsp content. It doesn't want to decode :sob:
    };
    sendPacket(await convToPacket('PlayerLoginRsp', this.kcpObject, rsp), KcpServer.currentXorBlob, KcpServer.currentXorBlob);
  }
}

export default PlayerLoginReq;
