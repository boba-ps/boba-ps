import { PlayerManager } from './../../db/player';
import type { Db } from './../../db/index';
import {
  AvatarDataNotify,
  EnterType,
  GetPlayerTokenReq,
  GetPlayerTokenRsp,
  OpenStateUpdateNotify,
  PlayerDataNotify,
  PlayerEnterSceneNotify,
  PlayerLoginReq,
  PlayerLoginRsp,
  PlayerStoreNotify,
  StoreType,
  StoreWeightLimitNotify,
} from "boba-protos";
import { KcpHandler, KcpServer } from "..";
import type { PacketContext } from "../router";

export class AuthHandler extends KcpHandler {
  private db!:Db;
  private playerManager:PlayerManager = new PlayerManager(this.db);

  constructor(db:Db) {
    super();
    this.db = db;
  }

  protected setup(server: KcpServer) {
    server.router.on(GetPlayerTokenReq, this.getPlayerToken.bind(this)).on(PlayerLoginReq, this.playerLogin.bind(this));
  }
  getPlayerToken({ req, res, connection }: PacketContext<GetPlayerTokenReq>) {
    const seed = 0x0n;
    const data = this.playerManager.get(parseInt(req.accountUid))!;
    
    res.send(GetPlayerTokenRsp, {
      uid: data.id,
      accountUid: req.accountUid,
      accountType: req.accountType,
      token: req.accountToken,
      secretKeySeed: seed,
      channelId: 1,
      clientIpStr: connection.address,
    });

    connection.encryptor.seed(seed);
  }

  playerLogin({ req, res, exec }: PacketContext<PlayerLoginReq>) {
    // TODO: do stuff with login data
    const data = this.playerManager.get(parseInt(req.accountUid))!;

    res.send(PlayerDataNotify, {
      nickName: data.nickname,
      serverTime: BigInt(exec.clock.now() >>> 0),
      regionId: 1,
      propMap: {
        10004: {
          type: 10004,
          value: { oneofKind: "ival", ival: 1n },
          val: 1n,
        },
        10005: {
          type: 10005,
          value: { oneofKind: "ival", ival: 50n },
          val: 50n,
        },
        10006: {
          type: 10006,
          value: { oneofKind: "ival", ival: 0n },
        },
        10007: {
          type: 10007,
          value: { oneofKind: "ival", ival: 1n },
          val: 1n,
        },
        10008: {
          type: 10008,
          value: { oneofKind: "ival", ival: 1n },
          val: 1n,
        },
        10009: {
          type: 10009,
          value: { oneofKind: "ival", ival: 1n },
          val: 1n,
        },
        10010: {
          type: 10010,
          value: { oneofKind: "ival", ival: 10000n },
          val: 10000n,
        },
        10011: {
          type: 10011,
          value: { oneofKind: "ival", ival: 10000n },
          val: 10000n,
        },
        10012: {
          type: 10012,
          value: { oneofKind: "ival", ival: 0n },
        },
        10013: {
          type: 10013,
          value: { oneofKind: "ival", ival: 2n },
          val: 2n,
        },
        10014: {
          type: 10014,
          value: { oneofKind: "ival", ival: 395n },
          val: 395n,
        },
        10015: {
          type: 10015,
          value: { oneofKind: "ival", ival: 30n },
          val: 30n,
        },
        10016: {
          type: 10016,
          value: { oneofKind: "ival", ival: 3397n },
          val: 3397n,
        },
        10017: {
          type: 10017,
          value: { oneofKind: "ival", ival: 2n },
          val: 2n,
        },
        10019: {
          type: 10019,
          value: { oneofKind: "ival", ival: 0n },
        },
        10020: {
          type: 10020,
          value: { oneofKind: "ival", ival: 160n },
          val: 160n,
        },
        10022: {
          type: 10022,
          value: { oneofKind: "ival", ival: 0n },
        },
        10023: {
          type: 10023,
          value: { oneofKind: "ival", ival: 0n },
        },
        10025: {
          type: 10025,
          value: { oneofKind: "ival", ival: 0n },
        },
        10026: {
          type: 10026,
          value: { oneofKind: "ival", ival: 0n },
        },
        10027: {
          type: 10027,
          value: { oneofKind: "ival", ival: 0n },
        },
        10035: {
          type: 10035,
          value: { oneofKind: "ival", ival: 0n },
        },
        10036: {
          type: 10036,
          value: { oneofKind: "ival", ival: 0n },
        },
        10037: {
          type: 10037,
          value: { oneofKind: "ival", ival: 0n },
        },
        10038: {
          type: 10038,
          value: { oneofKind: "ival", ival: 0n },
        },
        10039: {
          type: 10039,
          value: { oneofKind: "ival", ival: 0n },
        },
        10040: {
          type: 10040,
          value: { oneofKind: "ival", ival: 0n },
        },
        10041: {
          type: 10041,
          value: { oneofKind: "ival", ival: 0n },
        },
        10042: {
          type: 10042,
          value: { oneofKind: "ival", ival: 0n },
        },
        10043: {
          type: 10043,
          value: { oneofKind: "ival", ival: 0n },
        },
        10044: {
          type: 10044,
          value: { oneofKind: "ival", ival: 0n },
        },
      },
    });

    res.send(OpenStateUpdateNotify, {
      openStateMap: {
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 1,
        "5": 1,
        "6": 1,
        "10": 1,
        "11": 1,
        "12": 1,
        "16": 1,
        "18": 1,
        "19": 1,
        "21": 1,
        "22": 1,
        "23": 1,
        "25": 1,
        "27": 1,
        "28": 1,
        "29": 1,
        "30": 1,
        "37": 1,
        "38": 1,
        "45": 1,
        "50": 1,
        "55": 1,
        "65": 1,
        "901": 1,
        "902": 1,
        "903": 1,
        "1001": 1,
        "1003": 1,
        "1007": 1,
        "1300": 1,
        "1403": 1,
        "2101": 1,
      },
    });

    res.send(StoreWeightLimitNotify, {
      storeType: StoreType.STORE_PACK,
      weightLimit: 30000,
      materialCountLimit: 2000,
      weaponCountLimit: 2000,
      reliquaryCountLimit: 1500,
      furnitureCountLimit: 2000,
    });

    res.send(PlayerStoreNotify, {
      storeType: StoreType.STORE_PACK,
      weightLimit: 30000,
      itemList: [
        {
          itemId: 11101,
          guid: 2785642601942876162n,
          detail: {
            oneofKind: "equip",
            equip: {
              detail: {
                oneofKind: "weapon",
                weapon: {
                  level: 1,
                } as any,
              },
              isLocked: false,
            },
          },
        },
        {
          itemId: 60130,
          guid: 2785642601942876207n,
          detail: {
            oneofKind: "equip",
            equip: {
              detail: {
                oneofKind: "reliquary",
                reliquary: {
                  level: 1,
                  mainPropId: 13002,
                } as any,
              },
              isLocked: false,
            },
          },
        },
      ],
    });

    res.send(AvatarDataNotify, {
      avatarList: [
        {
          avatarId: 10000007,
          guid: 2785642601942876161n,
          propMap: {
            1001: {
              type: 1001,
              val: 575n,
            },
          },
          lifeState: 1,
          equipGuidList: [2785642601942876207n, 2785642601942876162n],
          fightPropMap: {
            1: 987.4696044921875,
            3: 0.03099999949336052,
            4: 42.53106689453125,
            6: 0,
            7: 61.97467041015625,
            20: 0.05000000074505806,
            21: 0,
            22: 0.5,
            23: 1,
            26: 0,
            27: 0,
            28: 0,
            29: 0,
            30: 0,
            40: 0,
            41: 0,
            42: 0,
            43: 0,
            44: 0,
            45: 0,
            46: 0,
            50: 0,
            51: 0,
            52: 0,
            53: 0,
            54: 0,
            55: 0,
            56: 0,
            74: 60,
            1010: 979.8616333007812,
            2000: 1018.0811767578125,
            2001: 42.53106689453125,
            2002: 61.97467041015625,
            2003: 0,
          },
          skillDepotId: 704,
          fetterInfo: {
            expLevel: 1,
            fetterList: [],
          },
          skillLevelMap: {
            10067: 1,
            10068: 1,
            100553: 1,
          },
          avatarType: 1,
          wearingFlycloakId: 140001,
          bornTime: 1648043376,
          pendingPromoteRewardList: [1, 3, 5],
          excelInfo: {
            prefabPathHash: 217316872338n,
            prefabPathRemoteHash: 681809261527n,
            controllerPathHash: 664801677487n,
            controllerPathRemoteHash: 980732318872n,
            combatConfigHash: 1052021163257n,
          },
        },
      ],
      avatarTeamMap: {
        1: {
          avatarGuidList: [2785642601942876161n],
        },
        2: {},
        3: {},
        4: {},
      },
      curAvatarTeamId: 1,
      chooseAvatarGuid: 2785642601942876161n,
      ownedFlycloakList: [140001],
      ownedCostumeList: [200302, 202101, 204101, 204501],
    });

    res.send(PlayerEnterSceneNotify, {
      sceneId: 3,
      pos: {
        x: 2527.529052734375,
        y: 215.549072265625,
        z: -1287.1180419921875,
      },
      sceneBeginTime: 1650278548732n,
      type: EnterType.ENTER_SELF,
      targetUid: data.id,
      enterSceneToken: 1000,
      isFirstLoginEnterScene: true,
      sceneTagIdList: [102, 107, 113, 117, 125, 134, 139, 141],
      enterReason: 1,
      worldType: 1,
      sceneTransaction: "3-648582960-1650278548-67458",
    });

    res.send(PlayerLoginRsp, {
      gameBiz: "hk4e_global",
      isScOpen: true,
      registerCps: "mihoyo",
    });
  }
}
