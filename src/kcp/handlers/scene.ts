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
  Retcode,
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
import type { Db } from "../../db";
import type { PacketContext } from "../router";
import { createPropProtoMap } from "../../game/propProto";
import { createOnlinePlayerInfoProto, createScenePlayerInfoProto } from "../../game/player/playerProto";
import {
  createAvatarEnterSceneInfoProto,
  createAvatarSceneEntityInfoProto,
  createSceneTeamAvatarProto,
} from "../../game/entity/avatar/avatarProto";
import { createAvatarTeamEnterSceneInfoProto } from "../../game/entity/avatar/teamProto";

export class SceneHandler extends KcpHandler {
  constructor(readonly db: Db) {
    super();
  }

  protected setup(server: KcpServer) {
    server.router
      .on(EnterSceneReadyReq, this.enterSceneReady.bind(this))
      .on(SceneInitFinishReq, this.sceneInitFinish.bind(this))
      .on(EnterSceneDoneReq, this.enterSceneDone.bind(this))
      .on(PostEnterSceneReq, this.postEnterScene.bind(this));
  }

  enterSceneReady({ req, res, connection }: PacketContext<EnterSceneReadyReq>) {
    this.db.transaction(() => {
      if (!connection.session) return;
      const player = this.db.players.get(connection.session.playerId);
      const world = player && this.db.worlds.getByJoined(player.id);

      if (!player || !world || req.enterSceneToken !== player.scene_enter_token) {
        res.send(EnterSceneReadyRsp, { retcode: Retcode.RET_ENTER_SCENE_FAIL });
        return;
      }

      // begin player world entrance
      const peers = this.db.worlds.getPlayers(world.id);

      res.send(EnterScenePeerNotify, {
        destSceneId: player.scene_rid,
        peerId: peers.find(({ id }) => id === player.id)?.peer_index ?? 0,
        hostPeerId: peers.find(({ id }) => id === world?.owner_id)?.peer_index ?? 0,
        enterSceneToken: player.scene_enter_token,
      });

      res.send(EnterSceneReadyRsp, {
        enterSceneToken: player.scene_enter_token,
      });
    })();
  }

  sceneInitFinish({ req, res, connection }: PacketContext<SceneInitFinishReq>) {
    this.db.transaction(() => {
      if (!connection.session) return;
      const player = this.db.players.get(connection.session.playerId);
      const world = player && this.db.worlds.getByJoined(player.id);

      if (!player || !world || req.enterSceneToken !== player.scene_enter_token) {
        res.send(EnterSceneReadyRsp, { retcode: Retcode.RET_ENTER_SCENE_FAIL });
        return;
      }

      // world properties
      const worldProps = this.db.worlds.getProps(world.id);

      res.send(WorldDataNotify, {
        worldPropMap: createPropProtoMap(worldProps),
      });

      // players joined in the world
      const peers = this.db.worlds.getPlayers(world.id).map((player) => {
        return {
          ...player,
          props: this.db.players.getProps(player.id),
        };
      });

      res.send(WorldPlayerInfoNotify, {
        playerInfoList: peers.map(createOnlinePlayerInfoProto),
        playerUidList: peers.map(({ id }) => id),
      });

      res.send(ScenePlayerInfoNotify, {
        playerInfoList: peers.map(createScenePlayerInfoProto),
      });

      // current player team avatar entities
      const avatars = this.db.avatars.getByPlayer(player.id);
      const teams = this.db.avatars.getTeamsByPlayer(player.id);
      const activeTeam = teams[player.active_team] ?? teams[0];
      const activeTeamEntity = activeTeam ? this.db.entities.getTeamByTeam(activeTeam.id) : undefined;

      const activeTeamAvatars = (activeTeam?.avatar_ids ?? []).map((id) => avatars.find((avatar) => avatar.id === id)!);
      const activeTeamAvatarEntities = activeTeamAvatars
        .map((avatar) => {
          const entity = this.db.entities.getAvatarByAvatar(avatar.id);
          const weaponEntity = this.db.entities.getWeaponByWeapon(avatar.weapon_id);

          return entity && weaponEntity ? { ...entity, avatar, weaponEntity } : undefined;
        })
        .filter((x) => x)
        .map((x) => x!);

      const activeAvatarId = activeTeam?.avatar_ids[activeTeam.active_avatar] ?? activeTeam?.avatar_ids[0];
      const activeAvatar = avatars.find(({ id }) => id === activeAvatarId) ?? avatars[0];
      const activeAvatarEntity = activeAvatar ? this.db.entities.getAvatarByAvatar(activeAvatar.id) : undefined;

      const levelEntity = this.db.entities.getLevelByWorld(world.id);

      res.send(PlayerEnterSceneInfoNotify, {
        curAvatarEntityId: activeAvatarEntity?.id ?? 0,
        avatarEnterInfo: activeTeamAvatarEntities.map(createAvatarEnterSceneInfoProto),
        teamEnterInfo: activeTeamEntity ? createAvatarTeamEnterSceneInfoProto(activeTeamEntity) : {},
        mpLevelEntityInfo: {
          entityId: levelEntity?.id ?? 0,
          authorityPeerId: peers.find(({ id }) => id === world.owner_id)?.peer_index ?? 0,
        },
        enterSceneToken: req.enterSceneToken,
      });

      // world time
      res.send(PlayerGameTimeNotify, {
        uid: player.id,
        gameTime: world.time,
      });

      res.send(SceneTimeNotify, {
        sceneId: player.scene_rid,
      });

      res.send(SceneDataNotify, {});

      // world host player
      const worldOwner = this.db.players.get(world.owner_id)!;

      res.send(HostPlayerNotify, {
        hostUid: worldOwner.id,
        hostPeerId: peers.find(({ id }) => id === world.owner_id)?.peer_index ?? 0,
      });

      res.send(SceneTeamUpdateNotify, {
        sceneTeamAvatarList: peers.flatMap((peer) => {
          const peerAvatars = this.db.avatars.getByPlayer(peer.id);
          const peerTeams = this.db.avatars.getTeamsByPlayer(peer.id);
          const peerActiveTeam = peerTeams[peer.active_team] ?? peerTeams[0];
          const peerActiveTeamAvatars = (peerActiveTeam?.avatar_ids ?? []).map(
            (id) => peerAvatars.find((avatar) => avatar.id === id)!
          );

          return peerActiveTeamAvatars
            .map((avatar) => {
              const entity = this.db.entities.getAvatarByAvatar(avatar.id);
              const weaponEntity = this.db.entities.getWeaponByWeapon(avatar.weapon_id);

              return entity && weaponEntity ? { ...entity, avatar, weaponEntity } : undefined;
            })
            .filter((x) => x)
            .map((entity) => createSceneTeamAvatarProto(player, entity!));
        }),
      });

      res.send(SceneInitFinishRsp, {
        enterSceneToken: player.scene_enter_token,
      });
    })();
  }

  enterSceneDone({ req, res, connection }: PacketContext<EnterSceneDoneReq>) {
    this.db.transaction(() => {
      if (!connection.session) return;
      const player = this.db.players.get(connection.session.playerId);
      const world = player && this.db.worlds.getByJoined(player.id);

      if (!player || !world || req.enterSceneToken !== player.scene_enter_token) {
        res.send(EnterSceneDoneRsp, { retcode: Retcode.RET_ENTER_SCENE_FAIL });
        return;
      }

      const peers = this.db.worlds.getPlayers(world.id);

      for (const peer of peers) {
        const peerAvatars = this.db.avatars.getByPlayer(peer.id);
        const peerTeams = this.db.avatars.getTeamsByPlayer(peer.id);
        const peerActiveTeam = peerTeams[peer.active_team] ?? peerTeams[0];
        const peerActiveTeamAvatars = (peerActiveTeam?.avatar_ids ?? []).map(
          (id) => peerAvatars.find((avatar) => avatar.id === id)!
        );

        for (const avatar of peerActiveTeamAvatars) {
          const entity = this.db.entities.getAvatar(avatar.id);

          if (entity) {
            res.send(SceneEntityAppearNotify, {
              entityList: [createAvatarSceneEntityInfoProto({ ...entity, avatar })],
              // TODO:
              appearType: VisionType.VISION_BORN,
            });
          }
        }
      }

      res.send(EnterSceneDoneRsp, {
        enterSceneToken: player.scene_enter_token,
      });
    })();
  }

  postEnterScene({ req, res }: PacketContext<PostEnterSceneReq>) {
    res.send(PostEnterSceneRsp, {
      enterSceneToken: req.enterSceneToken,
    });
  }
}
