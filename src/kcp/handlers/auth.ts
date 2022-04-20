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
  Retcode,
  StoreType,
  StoreWeightLimitNotify,
} from "boba-protos";
import { KcpHandler, KcpServer, KcpSession } from "..";
import type { Db } from "../../db";
import { StoreWeightLimitsKey } from "../../db/config";
import { createAvatarInfoProto } from "../../game/entity/avatar/avatarProto";
import { createAvatarTeamProtoMap } from "../../game/entity/avatar/teamProto";
import { createItemProto } from "../../game/player/itemProto";
import StoreWeightLimits from "../../game/player/weightLimits.json";
import { createPropProtoMap } from "../../game/propProto";
import type { PacketContext } from "../router";
import EnterReasons from "../../game/world/enterReasons.json";

export class AuthHandler extends KcpHandler {
  constructor(readonly db: Db) {
    super();
  }

  protected setup(server: KcpServer) {
    server.router.on(GetPlayerTokenReq, this.getPlayerToken.bind(this)).on(PlayerLoginReq, this.playerLogin.bind(this));
  }

  getPlayerToken({ req, res, connection }: PacketContext<GetPlayerTokenReq>) {
    this.db.transaction(() => {
      const account = this.db.accounts.get(parseInt(req.accountUid));
      const player = account && this.db.players.getByAccount(account.id)[0];

      // no such account
      // TODO: create player here if not found
      if (!account || !player) {
        res.send(GetPlayerTokenRsp, { retcode: Retcode.RET_LOGIN_INIT_FAIL });
        return;
      }

      // incorrect token
      if (account.login_token.toString("hex") !== req.accountToken) {
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
      const account = this.db.accounts.get(connection.session.accountId);
      const player = this.db.players.get(connection.session.playerId);

      // incorrect token
      if (!account || !player || account.login_token.toString("hex") !== req.token) {
        res.send(PlayerLoginRsp, { retcode: Retcode.RET_LOGIN_INIT_FAIL });
        return;
      }

      // player properties
      const playerProps = this.db.players.getProps(player.id);

      res.send(PlayerDataNotify, {
        nickName: player.nickname,
        serverTime: BigInt(executor.clock.now() >>> 0),
        regionId: player.region_rid,
        propMap: createPropProtoMap(playerProps),
      });

      // unlocked game features
      const openStates = this.db.players.getOpenStates(player.id);

      res.send(OpenStateUpdateNotify, {
        openStateMap: openStates.reduce((map, { type, value }) => {
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
      const items = this.db.items.getItemsByPlayer(player.id);

      res.send(PlayerStoreNotify, {
        storeType: StoreType.STORE_PACK,
        weightLimit: weightLimits.weight ?? StoreWeightLimits.weight,
        itemList: items.map(createItemProto),
      });

      // owned character and team list
      const avatars = this.db.avatars.getByPlayer(player.id).map((avatar) => {
        return {
          ...avatar,
          props: this.db.avatars.getProps(avatar.id),
          fightProps: this.db.avatars.getFightProps(avatar.id),
        };
      });

      const teams = this.db.avatars.getTeamsByPlayer(player.id);
      const activeTeam = teams[player.active_team] ?? teams[0];
      const activeAvatarId = activeTeam?.avatar_ids[activeTeam.active_avatar] ?? activeTeam?.avatar_ids[0];
      const activeAvatar = avatars.find(({ id }) => id === activeAvatarId) ?? avatars[0];

      res.send(AvatarDataNotify, {
        avatarList: avatars.map(createAvatarInfoProto),
        avatarTeamMap: createAvatarTeamProtoMap(teams),
        curAvatarTeamId: player.active_team,
        chooseAvatarGuid: activeAvatar ? BigInt(activeAvatar.id) : 0n,
        ownedFlycloakList: player.flycloak_rids,
        ownedCostumeList: player.costume_rids,
      });

      // begin enter scene
      res.send(PlayerEnterSceneNotify, {
        sceneId: player.scene_rid,
        pos: {
          x: player.pos_x,
          y: player.pos_y,
          z: player.pos_z,
        },
        sceneBeginTime: BigInt(executor.clock.now() >>> 0),
        type: EnterType.ENTER_SELF,
        targetUid: player.id,
        enterSceneToken: this.db.players.nextSceneEnterToken(player.id),
        isFirstLoginEnterScene: true,
        // TODO:
        sceneTagIdList: [102, 107, 113, 117, 125, 134, 139, 141],
        enterReason: EnterReasons.Login,
        worldLevel: player.world_level,
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
