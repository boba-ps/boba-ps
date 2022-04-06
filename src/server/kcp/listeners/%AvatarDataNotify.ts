/* eslint-disable import/no-unresolved */
import { KcpServer } from '../kcpServer';
import { convToPacket, sendPacket } from '../../../utils/packetUtils';
import { getPacketIdByProtoName } from '../../../utils/dataUtil';
import listenerClass from '../../../utils/classes/listenerClass';

class AvatarDataNotify extends listenerClass {
  constructor() {
    super('AvatarDataNotify', getPacketIdByProtoName('AvatarDataNotify'), KcpServer.currentPacket!, KcpServer.currentKcpObj!);
  }

  // AvatarDataNotify passed info: (Server -> Client)
  // avatarList (list of equipped chars)
  // avatarTeamMap (?)
  // tempAvatarGuidList (?)
  // ownedFlycloakList
  // ownedCostumeList
  // curAvatarTeamId (?)
  // chooseAvatarGuid (?)

  async exec() {
    await this.data.setProtobuf();
    const rsp = {
      avatarList: [
        {
          avatarId: 1,
          guid: '',
          propMap: {},
          lifeState: 1,
          equipGuidList: [],
          fightPropMap: {},
          skillDepotId: 1,
          fetterInfo: {
            expLevel: 1,
            fetterList: [],
          },
          skillLevelMap: {},
          avatarType: 1,
          wearingFlycloakId: 1,
          bornTime: 1,
          pendingPromoteRewardList: [],
          excelInfo: {
            prefabPathHash: '',
            prefabPathRemoteHash: '',
            controllerPathHash: '',
            controllerPathRemoteHash: '',
            combatConfigHash: '',
          },
        },
        {
          // Char 2 - Same as char 1
        },
        {
          // Char 3 - Same as char 1
        },
        {
          // Char 4 - Same as char 1
        },
      ],
      avatarTeamMap: {
        1: {
          avatarGuidList: [
            '',
            '',
            '',
            '',
          ],
        },
        2: {},
        3: {},
        4: {},
      },
      tempAvatarGuidList: [],
      ownedFlycloakList: [],
      ownedCostumeList: [],
      curAvatarTeamId: 1,
      chooseAvatarGuid: {
        low: 1,
        high: 1,
        unsigned: true,
      },
    };
    sendPacket(await convToPacket('AvatarDataNotify', this.kcpObject, rsp), KcpServer.currentXorBlob, KcpServer.currentXorBlob);
  }
}

export default AvatarDataNotify;
