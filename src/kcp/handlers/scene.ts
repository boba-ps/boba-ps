import {
  EnterSceneDoneReq,
  EnterSceneDoneRsp,
  EnterScenePeerNotify,
  EnterSceneReadyReq,
  EnterSceneReadyRsp,
  HostPlayerNotify,
  PlayerEnterSceneInfoNotify,
  PlayerGameTimeNotify,
  PostEnterSceneReq,
  PostEnterSceneRsp,
  ProtEntityType,
  SceneDataNotify,
  SceneEntityAppearNotify,
  SceneInitFinishReq,
  SceneInitFinishRsp,
  ScenePlayerInfoNotify,
  SceneTeamUpdateNotify,
  SceneTimeNotify,
  VisionType,
  WorldDataNotify,
  WorldPlayerInfoNotify,
} from "boba-protos";
import { KcpHandler, KcpServer } from "..";
import type { PacketContext } from "../router";

export class SceneHandler extends KcpHandler {
  protected setup(server: KcpServer) {
    server.router
      .on(EnterSceneReadyReq, this.enterSceneReady.bind(this))
      .on(SceneInitFinishReq, this.sceneInitFinish.bind(this))
      .on(EnterSceneDoneReq, this.enterSceneDone.bind(this))
      .on(PostEnterSceneReq, this.postEnterScene.bind(this));
  }

  enterSceneReady({ req, res }: PacketContext<EnterSceneReadyReq>) {
    res.send(EnterScenePeerNotify, {
      destSceneId: 1,
      peerId: 1,
      hostPeerId: 1,
      enterSceneToken: req.enterSceneToken,
    });

    res.send(EnterSceneReadyRsp, {
      enterSceneToken: req.enterSceneToken,
    });
  }

  sceneInitFinish({ req, res }: PacketContext<SceneInitFinishReq>) {
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
      enterSceneToken: req.enterSceneToken,
    });

    res.send(PlayerGameTimeNotify, {
      uid: 6064,
      gameTime: 8 * 60,
    });

    res.send(SceneTimeNotify, {
      sceneId: 3,
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
          playerUid: 6064,
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
      enterSceneToken: req.enterSceneToken,
    });
  }

  enterSceneDone({ req, res }: PacketContext<EnterSceneDoneReq>) {
    res.send(SceneEntityAppearNotify, {
      entityList: [
        {
          entityType: ProtEntityType.PROT_ENTITY_AVATAR,
          entityId: 16778494,
          motionInfo: {
            pos: {
              x: 2527.529052734375,
              y: 215.549072265625,
              z: -1287.1180419921875,
            },
            rot: {
              y: 14.178290367126465,
            },
            speed: {},
          },
          propList: [
            {
              type: 4001,
              propValue: {
                type: 4001,
                value: { oneofKind: "ival", ival: 2n },
                val: 2n,
              },
            },
          ],
          fightPropList: [
            { propType: 1, propValue: 987.4696044921875 },
            { propType: 3, propValue: 0.03099999949336052 },
            { propType: 4, propValue: 42.53106689453125 },
            { propType: 6 },
            { propType: 7, propValue: 61.97467041015625 },
            { propType: 20, propValue: 0.05000000074505806 },
            { propType: 21 },
            { propType: 22, propValue: 0.5 },
            { propType: 23, propValue: 1 },
            { propType: 26 },
            { propType: 27 },
            { propType: 28 },
            { propType: 29 },
            { propType: 30 },
            { propType: 40 },
            { propType: 41 },
            { propType: 42 },
            { propType: 43 },
            { propType: 44 },
            { propType: 45 },
            { propType: 46 },
            { propType: 50 },
            { propType: 51 },
            { propType: 52 },
            { propType: 53 },
            { propType: 54 },
            { propType: 55 },
            { propType: 56 },
            { propType: 74, propValue: 60 },
            { propType: 2000, propValue: 1018.0811767578125 },
            { propType: 2001, propValue: 42.53106689453125 },
            { propType: 2002, propValue: 61.97467041015625 },
            { propType: 2003 },
            { propType: 1010, propValue: 979.8616333007812 },
          ],
          lifeState: 1,
          animatorParaList: [{}],
          entity: {
            oneofKind: "avatar",
            avatar: {
              uid: 648582960,
              avatarId: 10000007,
              guid: 2785642601942876161n,
              peerId: 1,
              equipIdList: [60130, 11101],
              skillDepotId: 704,
              weapon: {
                entityId: 100664575,
                gadgetId: 50011101,
                itemId: 11101,
                guid: 2785642601942876162n,
                level: 1,
                abilityInfo: {},
              } as any,
              reliquaryList: [
                {
                  itemId: 60130,
                  guid: 2785642601942876207n,
                  level: 1,
                  promoteLevel: 1,
                },
              ],
              skillLevelMap: {
                "10067": 1,
                "10068": 1,
                "100553": 1,
              },
              wearingFlycloakId: 140001,
              bornTime: 1648043376,
              excelInfo: {
                prefabPathHash: 217316872338n,
                prefabPathRemoteHash: 681809261527n,
                controllerPathHash: 664801677487n,
                controllerPathRemoteHash: 980732318872n,
                combatConfigHash: 1052021163257n,
              },
            } as any,
          },
          entityClientData: {},
          entityAuthorityInfo: {
            abilityInfo: {},
            rendererChangedInfo: {},
            aiInfo: {
              isAiOpen: true,
              bornPos: {},
            },
            bornPos: {},
          },
        },
      ],
      appearType: VisionType.VISION_BORN,
    });

    res.send(EnterSceneDoneRsp, {
      enterSceneToken: req.enterSceneToken,
    });
  }

  postEnterScene({ req, res }: PacketContext<PostEnterSceneReq>) {
    res.send(PostEnterSceneRsp, {
      enterSceneToken: req.enterSceneToken,
    });
  }
}
