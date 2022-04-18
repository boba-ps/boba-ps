import {
  AvatarDataNotify,
  GetPlayerTokenReq,
  GetPlayerTokenRsp,
  OpenStateUpdateNotify,
  PlayerDataNotify,
  PlayerLoginReq,
  PlayerLoginRsp,
  PlayerStoreNotify,
  StoreType,
  StoreWeightLimitNotify,
} from "boba-protos";
import { KcpHandler, KcpServer } from "..";
import type { PacketContext } from "../router";

export class AuthHandler extends KcpHandler {
  protected setup(server: KcpServer) {
    server.router.on(GetPlayerTokenReq, this.getPlayerToken.bind(this)).on(PlayerLoginReq, this.playerLogin.bind(this));
  }

  getPlayerToken({ req, res, connection }: PacketContext<GetPlayerTokenReq>) {
    const seed = 0x0n;

    res.send(GetPlayerTokenRsp, {
      uid: 6064,
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
    req;

    res.send(PlayerDataNotify, {
      nickName: "Booba",
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
            "1": 987.4696044921875,
            "3": 0.03099999949336052,
            "4": 42.53106689453125,
            "6": 0,
            "7": 61.97467041015625,
            "20": 0.05000000074505806,
            "21": 0,
            "22": 0.5,
            "23": 1,
            "26": 0,
            "27": 0,
            "28": 0,
            "29": 0,
            "30": 0,
            "40": 0,
            "41": 0,
            "42": 0,
            "43": 0,
            "44": 0,
            "45": 0,
            "46": 0,
            "50": 0,
            "51": 0,
            "52": 0,
            "53": 0,
            "54": 0,
            "55": 0,
            "56": 0,
            "74": 60,
            "1010": 979.8616333007812,
            "2000": 1018.0811767578125,
            "2001": 42.53106689453125,
            "2002": 61.97467041015625,
            "2003": 0,
          },
          skillDepotId: 704,
          fetterInfo: {
            expLevel: 1,
            fetterList: [
              {
                fetterId: 2124,
                fetterState: 1,
              },
              {
                fetterId: 2123,
                fetterState: 1,
              },
              {
                fetterId: 2122,
                fetterState: 1,
              },
              {
                fetterId: 2121,
                fetterState: 1,
              },
              {
                fetterId: 2120,
                fetterState: 1,
              },
              {
                fetterId: 2119,
                fetterState: 1,
              },
              {
                fetterId: 2118,
                fetterState: 1,
              },
              {
                fetterId: 2117,
                fetterState: 1,
              },
              {
                fetterId: 2116,
                fetterState: 1,
              },
              {
                fetterId: 2115,
                fetterState: 1,
              },
              {
                fetterId: 2114,
                fetterState: 1,
              },
              {
                fetterId: 2113,
                fetterState: 1,
              },
              {
                fetterId: 2112,
                fetterState: 1,
              },
              {
                fetterId: 2111,
                fetterState: 1,
              },
              {
                fetterId: 2110,
                fetterState: 1,
              },
              {
                fetterId: 2109,
                fetterState: 1,
              },
              {
                fetterId: 2108,
                fetterState: 1,
              },
              {
                fetterId: 2107,
                fetterState: 1,
              },
              {
                fetterId: 2106,
                fetterState: 1,
              },
              {
                fetterId: 2105,
                fetterState: 1,
              },
              {
                fetterId: 2303,
                fetterState: 3,
              },
              {
                fetterId: 2104,
                fetterState: 1,
              },
              {
                fetterId: 2302,
                fetterState: 3,
              },
              {
                fetterId: 2103,
                fetterState: 1,
              },
              {
                fetterId: 2301,
                fetterState: 3,
              },
              {
                fetterId: 2102,
                fetterState: 1,
              },
              {
                fetterId: 2101,
                fetterState: 1,
              },
              {
                fetterId: 2046,
                fetterState: 1,
              },
              {
                fetterId: 2045,
                fetterState: 1,
              },
              {
                fetterId: 2044,
                fetterState: 1,
              },
              {
                fetterId: 2019,
                fetterState: 1,
              },
              {
                fetterId: 2018,
                fetterState: 1,
              },
              {
                fetterId: 2017,
                fetterState: 1,
              },
              {
                fetterId: 2016,
                fetterState: 1,
              },
              {
                fetterId: 2015,
                fetterState: 1,
              },
              {
                fetterId: 2014,
                fetterState: 1,
              },
              {
                fetterId: 2013,
                fetterState: 1,
              },
              {
                fetterId: 2012,
                fetterState: 1,
              },
              {
                fetterId: 2011,
                fetterState: 1,
              },
              {
                fetterId: 2010,
                fetterState: 1,
              },
              {
                fetterId: 2009,
                fetterState: 1,
              },
              {
                fetterId: 2207,
                fetterState: 1,
              },
              {
                fetterId: 2008,
                fetterState: 1,
              },
              {
                fetterId: 2200,
                fetterState: 2,
              },
              {
                fetterId: 2001,
                fetterState: 1,
              },
              {
                fetterId: 2098,
                fetterState: 1,
              },
              {
                fetterId: 2201,
                fetterState: 2,
              },
              {
                fetterId: 2002,
                fetterState: 1,
              },
              {
                fetterId: 2099,
                fetterState: 1,
              },
              {
                fetterId: 2401,
                fetterState: 3,
              },
              {
                fetterId: 2202,
                fetterState: 1,
              },
              {
                fetterId: 2003,
                fetterState: 1,
              },
              {
                fetterId: 2100,
                fetterState: 1,
              },
              {
                fetterId: 2402,
                fetterState: 3,
              },
              {
                fetterId: 2203,
                fetterState: 1,
              },
              {
                fetterId: 2004,
                fetterState: 1,
              },
              {
                fetterId: 2403,
                fetterState: 3,
              },
              {
                fetterId: 2204,
                fetterState: 1,
              },
              {
                fetterId: 2005,
                fetterState: 1,
              },
              {
                fetterId: 2205,
                fetterState: 1,
              },
              {
                fetterId: 2006,
                fetterState: 1,
              },
              {
                fetterId: 2206,
                fetterState: 1,
              },
              {
                fetterId: 2007,
                fetterState: 1,
              },
              {
                fetterId: 2020,
                fetterState: 1,
              },
              {
                fetterId: 2021,
                fetterState: 1,
              },
              {
                fetterId: 2035,
                fetterState: 1,
              },
              {
                fetterId: 2036,
                fetterState: 1,
              },
              {
                fetterId: 2037,
                fetterState: 1,
              },
              {
                fetterId: 2038,
                fetterState: 1,
              },
              {
                fetterId: 2039,
                fetterState: 1,
              },
              {
                fetterId: 2043,
                fetterState: 1,
              },
              {
                fetterId: 2034,
                fetterState: 1,
              },
              {
                fetterId: 2032,
                fetterState: 1,
              },
              {
                fetterId: 2042,
                fetterState: 1,
              },
              {
                fetterId: 2041,
                fetterState: 1,
              },
              {
                fetterId: 2040,
                fetterState: 1,
              },
              {
                fetterId: 2033,
                fetterState: 1,
              },
              {
                fetterId: 2078,
                fetterState: 3,
              },
              {
                fetterId: 2031,
                fetterState: 1,
              },
              {
                fetterId: 2030,
                fetterState: 1,
              },
              {
                fetterId: 2029,
                fetterState: 1,
              },
              {
                fetterId: 2028,
                fetterState: 1,
              },
              {
                fetterId: 2027,
                fetterState: 1,
              },
              {
                fetterId: 2026,
                fetterState: 1,
              },
              {
                fetterId: 2025,
                fetterState: 1,
              },
              {
                fetterId: 2024,
                fetterState: 1,
              },
              {
                fetterId: 2023,
                fetterState: 1,
              },
              {
                fetterId: 2022,
                fetterState: 1,
              },
              {
                fetterId: 2047,
                fetterState: 1,
              },
              {
                fetterId: 2048,
                fetterState: 1,
              },
              {
                fetterId: 2049,
                fetterState: 1,
              },
              {
                fetterId: 2050,
                fetterState: 1,
              },
              {
                fetterId: 2051,
                fetterState: 1,
              },
              {
                fetterId: 2052,
                fetterState: 1,
              },
              {
                fetterId: 2053,
                fetterState: 1,
              },
              {
                fetterId: 2054,
                fetterState: 1,
              },
              {
                fetterId: 2055,
                fetterState: 1,
              },
              {
                fetterId: 2056,
                fetterState: 1,
              },
              {
                fetterId: 2057,
                fetterState: 1,
              },
              {
                fetterId: 2058,
                fetterState: 1,
              },
              {
                fetterId: 2059,
                fetterState: 1,
              },
              {
                fetterId: 2060,
                fetterState: 1,
              },
              {
                fetterId: 2061,
                fetterState: 3,
              },
              {
                fetterId: 2062,
                fetterState: 3,
              },
              {
                fetterId: 2063,
                fetterState: 3,
              },
              {
                fetterId: 2064,
                fetterState: 3,
              },
              {
                fetterId: 2065,
                fetterState: 3,
              },
              {
                fetterId: 2066,
                fetterState: 3,
              },
              {
                fetterId: 2067,
                fetterState: 3,
              },
              {
                fetterId: 2068,
                fetterState: 3,
              },
              {
                fetterId: 2069,
                fetterState: 3,
              },
              {
                fetterId: 2070,
                fetterState: 3,
              },
              {
                fetterId: 2071,
                fetterState: 3,
              },
              {
                fetterId: 2072,
                fetterState: 3,
              },
              {
                fetterId: 2073,
                fetterState: 3,
              },
              {
                fetterId: 2074,
                fetterState: 3,
              },
              {
                fetterId: 2075,
                fetterState: 3,
              },
              {
                fetterId: 2076,
                fetterState: 3,
              },
              {
                fetterId: 2077,
                fetterState: 3,
              },
              {
                fetterId: 2079,
                fetterState: 3,
              },
              {
                fetterId: 2080,
                fetterState: 3,
              },
              {
                fetterId: 2081,
                fetterState: 3,
              },
              {
                fetterId: 2084,
                fetterState: 3,
              },
              {
                fetterId: 2085,
                fetterState: 3,
              },
              {
                fetterId: 2086,
                fetterState: 3,
              },
              {
                fetterId: 2087,
                fetterState: 3,
              },
              {
                fetterId: 2088,
                fetterState: 3,
              },
              {
                fetterId: 2089,
                fetterState: 1,
              },
              {
                fetterId: 2090,
                fetterState: 1,
              },
              {
                fetterId: 2091,
                fetterState: 1,
              },
              {
                fetterId: 2092,
                fetterState: 1,
              },
              {
                fetterId: 2093,
                fetterState: 1,
              },
              {
                fetterId: 105,
                fetterState: 2,
              },
              {
                fetterId: 2095,
                fetterState: 1,
              },
              {
                fetterId: 2096,
                fetterState: 1,
              },
              {
                fetterId: 2097,
                fetterState: 1,
              },
            ],
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

    res.send(PlayerLoginRsp, {
      isUseAbilityHash: true,
      abilityHashCode: 557879627,
      gameBiz: "hk4e_global",
      isScOpen: true,
      registerCps: "mihoyo",
    });
  }
}
