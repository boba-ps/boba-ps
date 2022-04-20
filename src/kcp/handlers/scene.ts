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
import { PlayerHandle } from "../../game/player";
import { PropValueProtoBuilder } from "../../game/propProto";

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
      const player = PlayerHandle.fromId(this.db, connection.session.playerId);
      const world = player?.getJoinedWorld();

      if (!player || !world || !player.isSceneEnterToken(req.enterSceneToken)) {
        res.send(EnterSceneReadyRsp, { retcode: Retcode.RET_ENTER_SCENE_FAIL });
        return;
      }

      // begin player world entrance
      const peers = world.getPlayers();
      const playerPeer = peers.find(({ id }) => id === player.id);
      const hostPeer = peers.find(({ id }) => id === world.value.owner_id);

      res.send(EnterScenePeerNotify, {
        destSceneId: player.value.scene_rid,
        peerId: playerPeer ? playerPeer.peerIndex + 1 : 0,
        hostPeerId: hostPeer ? hostPeer.peerIndex + 1 : 0,
        enterSceneToken: player.value.scene_enter_token,
      });

      res.send(EnterSceneReadyRsp, {
        enterSceneToken: player.value.scene_enter_token,
      });
    })();
  }

  sceneInitFinish({ req, res, connection }: PacketContext<SceneInitFinishReq>) {
    this.db.transaction(() => {
      if (!connection.session) return;
      const player = PlayerHandle.fromId(this.db, connection.session.playerId);
      const world = player?.getJoinedWorld();

      if (!player || !world || !player.isSceneEnterToken(req.enterSceneToken)) {
        res.send(EnterSceneReadyRsp, { retcode: Retcode.RET_ENTER_SCENE_FAIL });
        return;
      }

      // world properties
      res.send(WorldDataNotify, {
        worldPropMap: PropValueProtoBuilder.createMap(world.getProps().map((prop) => prop.value)),
      });

      // players joined in the world
      const peers = world.getPlayers();

      res.send(WorldPlayerInfoNotify, {
        playerInfoList: peers.map((peer) => peer.createOnlineInfoProto()),
        playerUidList: peers.map(({ id }) => id),
      });

      res.send(ScenePlayerInfoNotify, {
        playerInfoList: peers.map((peer) => peer.createSceneInfoProto()),
      });

      // current player team avatar entities
      const activeTeam = player.getActiveTeam();
      const worldOwner = world.getOwnerAsPlayer();

      res.send(PlayerEnterSceneInfoNotify, {
        curAvatarEntityId: activeTeam.getActiveAvatar()?.getEntity().id ?? 0,
        avatarEnterInfo: activeTeam.getAvatars().map((avatar) => avatar.createEnterSceneInfoProto()),
        teamEnterInfo: activeTeam.createEnterSceneInfoProto(),
        mpLevelEntityInfo: {
          entityId: world.getLevelEntity().id,
          authorityPeerId: worldOwner ? worldOwner.peerIndex + 1 : 0,
        },
        enterSceneToken: req.enterSceneToken,
      });

      // world time
      res.send(PlayerGameTimeNotify, {
        uid: player.id,
        gameTime: world.value.time,
      });

      res.send(SceneTimeNotify, {
        sceneId: player.value.scene_rid,
      });

      res.send(SceneDataNotify, {});

      // world host player
      res.send(HostPlayerNotify, {
        hostUid: world.getOwner().id,
        hostPeerId: worldOwner ? worldOwner.peerIndex + 1 : 0,
      });

      res.send(SceneTeamUpdateNotify, {
        sceneTeamAvatarList: peers.flatMap((peer) => peer.getAvatars()).map((avatar) => avatar.createSceneTeamProto()),
      });

      res.send(SceneInitFinishRsp, {
        enterSceneToken: player.value.scene_enter_token,
      });
    })();
  }

  enterSceneDone({ req, res, connection }: PacketContext<EnterSceneDoneReq>) {
    this.db.transaction(() => {
      if (!connection.session) return;
      const player = PlayerHandle.fromId(this.db, connection.session.playerId);
      const world = player?.getJoinedWorld();

      if (!player || !world || !player.isSceneEnterToken(req.enterSceneToken)) {
        res.send(EnterSceneDoneRsp, { retcode: Retcode.RET_ENTER_SCENE_FAIL });
        return;
      }

      for (const peer of world.getPlayers()) {
        const avatar = peer.getActiveTeam().getActiveAvatar();

        if (avatar) {
          res.send(SceneEntityAppearNotify, {
            entityList: [avatar.createSceneEntityInfoProto()],
            // TODO:
            appearType: VisionType.VISION_BORN,
          });
        }
      }

      res.send(EnterSceneDoneRsp, {
        enterSceneToken: player.value.scene_enter_token,
      });
    })();
  }

  postEnterScene({ req, res }: PacketContext<PostEnterSceneReq>) {
    res.send(PostEnterSceneRsp, {
      enterSceneToken: req.enterSceneToken,
    });
  }
}
