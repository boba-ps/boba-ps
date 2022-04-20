import { OnlinePlayerInfo, ScenePlayerInfo } from "boba-protos";
import type { Player, PlayerProp } from "../../db/player";
import type { WorldPlayer } from "../../db/world";
import PlayerProps from "./playerProps.json";

export function createOnlinePlayerInfoProto(
  player: Player & {
    props: PlayerProp[];
  }
) {
  return OnlinePlayerInfo.create({
    uid: player.id,
    nickname: player.nickname,
    signature: player.signature,
    avatarId: player.main_char_rid,
    playerLevel: player.props.find(({ type }) => type === PlayerProps.PlayerLevel)?.ival ?? 0,
    worldLevel: player.world_level,
    // TODO: mpSettingsType, profilePicture, curPlayerNumInWorld
  });
}

export function createScenePlayerInfoProto(
  player: WorldPlayer & {
    props: PlayerProp[];
  }
) {
  return ScenePlayerInfo.create({
    uid: player.id,
    name: player.nickname,
    peerId: player.peer_index,
    sceneId: player.scene_rid,
    isConnected: true,
    onlinePlayerInfo: createOnlinePlayerInfoProto(player),
  });
}
