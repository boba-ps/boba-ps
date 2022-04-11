import * as ScenePlayerInfo_proto from "./ScenePlayerInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 293
}

export interface ScenePlayerInfoNotify {
	playerInfoList?: ScenePlayerInfo_proto.ScenePlayerInfo[];
}

