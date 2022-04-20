import {
  AvatarDataNotify,
  AvatarTeam,
  EnterType,
  GetPlayerTokenReq,
  GetPlayerTokenRsp,
  OpenStateUpdateNotify,
  PlayerDataNotify,
  PlayerEnterSceneNotify,
  PlayerLoginReq,
  PlayerLoginRsp,
  PlayerStoreNotify,
  Retcode,
  StoreType,
  StoreWeightLimitNotify,
} from "boba-protos";
import { KcpHandler, KcpServer, KcpSession } from "..";
import type { Db } from "../../db";
import { StoreWeightLimitsKey } from "../../db/config";
import StoreWeightLimits from "../../game/player/weightLimits.json";
import { PropValueProtoBuilder } from "../../game/propProto";
import type { PacketContext } from "../router";
import EnterReasons from "../../game/world/enterReasons.json";
import { AccountHandle } from "../../game/account";
import { PlayerHandle } from "../../game/player";

export class AuthHandler extends KcpHandler {
  constructor(readonly db: Db) {
    super();
  }

  protected setup(server: KcpServer) {
    server.router.on(GetPlayerTokenReq, this.getPlayerToken.bind(this)).on(PlayerLoginReq, this.playerLogin.bind(this));
  }

  getPlayerToken({ req, res, connection }: PacketContext<GetPlayerTokenReq>) {
    this.db.transaction(() => {
      const account = AccountHandle.fromId(this.db, parseInt(req.accountUid));
      const player = account?.getMainPlayer();

      // no such account
      // TODO: create player here if not found
      if (!account || !player) {
        res.send(GetPlayerTokenRsp, { retcode: Retcode.RET_LOGIN_INIT_FAIL });
        return;
      }

      // incorrect token
      if (!account.isLoginToken(req.accountToken)) {
        res.send(GetPlayerTokenRsp, { retcode: Retcode.RET_LOGIN_INIT_FAIL });
        return;
      }

      connection.session = new KcpSession(account.id, player.id);

      const seed = connection.manager.server.sharedMt.next();

      res.send(GetPlayerTokenRsp, {
        uid: player.id,
        accountUid: req.accountUid,
        accountType: req.accountType,
        secretKeySeed: seed,
        token: req.accountToken,
        channelId: req.channelId,
        platformType: req.platformType,
        countryCode: req.countryCode,
        clientIpStr: connection.address,
      });

      connection.encryptor.seed(seed);
    })();
  }

  playerLogin({ req, res, executor, connection }: PacketContext<PlayerLoginReq>) {
    this.db.transaction(() => {
      if (!connection.session) return;
      const account = AccountHandle.fromId(this.db, connection.session.accountId);
      const player = PlayerHandle.fromId(this.db, connection.session.playerId);

      // incorrect token
      if (!account || !player || !account.isLoginToken(req.token)) {
        res.send(PlayerLoginRsp, { retcode: Retcode.RET_LOGIN_INIT_FAIL });
        return;
      }

      // player properties
      res.send(PlayerDataNotify, {
        nickName: player.value.nickname,
        serverTime: BigInt(executor.clock.now() >>> 0),
        regionId: player.value.region_rid,
        propMap: PropValueProtoBuilder.createMap(player.getProps().map((prop) => prop.createProto())),
      });

      // unlocked game features
      res.send(OpenStateUpdateNotify, {
        openStateMap: player.getOpenStates().reduce((map, { value: { type, value } }) => {
          map[type] = value;
          return map;
        }, {} as Record<number, number>),
      });

      // inventory limits
      const weightLimits = this.db.config.get(StoreWeightLimitsKey);

      res.send(StoreWeightLimitNotify, {
        storeType: StoreType.STORE_PACK,
        weightLimit: weightLimits.weight ?? StoreWeightLimits.weight,
        materialCountLimit: weightLimits.materialCount ?? StoreWeightLimits.materialCount,
        weaponCountLimit: weightLimits.weaponCount ?? StoreWeightLimits.weaponCount,
        reliquaryCountLimit: weightLimits.reliquaryCount ?? StoreWeightLimits.reliquaryCount,
        furnitureCountLimit: weightLimits.furnitureCount ?? StoreWeightLimits.furnitureCount,
      });

      // inventory upload
      res.send(PlayerStoreNotify, {
        storeType: StoreType.STORE_PACK,
        weightLimit: weightLimits.weight ?? StoreWeightLimits.weight,
        itemList: player.inventory.getAll().map((item) => item.createItemProto()),
      });

      // owned character and team list
      const activeAvatar = player.getActiveTeam().getActiveAvatar();

      res.send(AvatarDataNotify, {
        avatarList: player.getAvatars().map((avatar) => avatar.createInfoProto()),
        avatarTeamMap: player.getTeams().reduce((map, team, i) => {
          map[i] = team.createProto();
          return map;
        }, {} as Record<number, AvatarTeam>),
        curAvatarTeamId: player.value.active_team + 1,
        chooseAvatarGuid: activeAvatar ? BigInt(activeAvatar.id) : 0n,
        ownedFlycloakList: player.flycloakRids,
        ownedCostumeList: player.costumeRids,
      });

      // begin enter scene
      res.send(PlayerEnterSceneNotify, {
        sceneId: player.value.scene_rid,
        pos: {
          x: player.value.pos_x,
          y: player.value.pos_y,
          z: player.value.pos_z,
        },
        sceneBeginTime: BigInt(executor.clock.now() >>> 0),
        type: EnterType.ENTER_SELF,
        targetUid: player.id,
        enterSceneToken: player.getNextSceneEnterToken(),
        isFirstLoginEnterScene: true,
        // TODO:
        sceneTagIdList: [102, 107, 113, 117, 125, 134, 139, 141],
        enterReason: EnterReasons.Login,
        worldLevel: player.value.world_level,
        sceneTransaction: `3-${player.id}-${executor.clock.now() >>> 0}-${(Math.random() * 100000) >>> 0}`,
      });

      res.send(PlayerLoginRsp, {
        gameBiz: "hk4e_global",
        isScOpen: true,
        registerCps: "mihoyo",
      });
    })();
  }
}
