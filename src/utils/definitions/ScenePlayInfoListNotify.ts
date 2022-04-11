import * as ScenePlayInfo_proto from "./ScenePlayInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4362
}

export interface ScenePlayInfoListNotify {
	playInfoList?: ScenePlayInfo_proto.ScenePlayInfo[];
}

