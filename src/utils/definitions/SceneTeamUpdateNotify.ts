import * as SceneTeamAvatar_proto from "./SceneTeamAvatar"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1793
}

export interface SceneTeamUpdateNotify {
	sceneTeamAvatarList?: SceneTeamAvatar_proto.SceneTeamAvatar[];
	isInMp?: boolean;
}

