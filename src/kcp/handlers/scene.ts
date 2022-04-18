import {
  HostPlayerNotify,
  PlayerEnterSceneInfoNotify,
  PlayerGameTimeNotify,
  ProtEntityType,
  SceneDataNotify,
  SceneInitFinishReq,
  SceneInitFinishRsp,
  ScenePlayerInfoNotify,
  SceneTeamUpdateNotify,
  SceneTimeNotify,
  WorldDataNotify,
  WorldPlayerInfoNotify,
} from "boba-protos";
import { KcpHandler, KcpServer } from "..";
import type { PacketContext } from "../router";

export class SceneHandler extends KcpHandler {
  protected setup(server: KcpServer) {
    server.router.on(SceneInitFinishReq, this.sceneInitFinish.bind(this));
  }

  sceneInitFinish({ res }: PacketContext<SceneInitFinishReq>) {
    res.send(WorldDataNotify, {
      worldPropMap: {
        1: {
          // world level
          type: 1,
          value: {
            oneofKind: "ival",
            ival: 1n,
          },
        },

        2: {
          // is multiplayer?
          type: 2,
          value: {
            oneofKind: "ival",
            ival: 0n,
          },
        },
      },
    });

    res.send(WorldPlayerInfoNotify, {
      playerInfoList: [
        {
          uid: 6064,
          nickname: "Booba",
          playerLevel: 1,
          curPlayerNumInWorld: 1,
          profilePicture: {
            avatarId: 10000007,
          },
        },
      ],
      playerUidList: [6064],
    });

    res.send(ScenePlayerInfoNotify, {
      playerInfoList: [
        {
          uid: 6064,
          peerId: 1,
          name: "Booba",
          sceneId: 1,
          onlinePlayerInfo: {
            uid: 6064,
            nickname: "Booba",
            playerLevel: 1,
            profilePicture: {
              avatarId: 10000007,
            },
          },
        },
      ],
    });

    res.send(PlayerEnterSceneInfoNotify, {
      curAvatarEntityId: 16778494,
      avatarEnterInfo: [
        {
          avatarGuid: 2785642601942876161n,
          avatarEntityId: 16778494,
          avatarAbilityInfo: {},
          weaponGuid: 2785642601942876162n,
          weaponEntityId: 100664575,
          weaponAbilityInfo: {},
        },
      ],
      teamEnterInfo: {
        teamEntityId: 150996221,
        teamAbilityInfo: {},
        abilityControlBlock: {},
      },
      mpLevelEntityInfo: {
        entityId: 184550656,
        authorityPeerId: 1,
        abilityInfo: {},
      },
      enterSceneToken: 1000,
    });

    res.send(PlayerGameTimeNotify, {
      uid: 6064,
      gameTime: 8 * 60,
    });

    res.send(SceneTimeNotify, {
      sceneId: 1,
    });

    res.send(SceneDataNotify, {
      levelConfigNameList: ["Level_BigWorld"],
    });

    res.send(HostPlayerNotify, {
      hostUid: 6064,
      hostPeerId: 1,
    });

    res.send(SceneTeamUpdateNotify, {
      sceneTeamAvatarList: [
        {
          playerUid: 648582960,
          avatarGuid: 2785642601942876161n,
          sceneId: 1,
          entityId: 16778494,
          avatarAbilityInfo: {},
          sceneEntityInfo: {
            entityType: ProtEntityType.PROT_ENTITY_AVATAR,
            entityId: 16778494,
            lifeState: 1,
          },
          weaponGuid: 2785642601942876162n,
          weaponEntityId: 100664575,
          isPlayerCurAvatar: true,
        },
      ],
    });

    res.send(SceneInitFinishRsp, {
      enterSceneToken: 1000,
    });
  }
}
