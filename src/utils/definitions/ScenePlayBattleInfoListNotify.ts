import * as ScenePlayBattleInfo_proto from "./ScenePlayBattleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4386
}

export interface ScenePlayBattleInfoListNotify {
	battleInfoList?: ScenePlayBattleInfo_proto.ScenePlayBattleInfo[];
}

