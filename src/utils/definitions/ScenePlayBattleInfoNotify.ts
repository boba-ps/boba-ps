import * as ScenePlayBattleInfo_proto from "./ScenePlayBattleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4399
}

export interface ScenePlayBattleInfoNotify {
	battleInfo?: ScenePlayBattleInfo_proto.ScenePlayBattleInfo;
}

