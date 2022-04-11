import * as PlayerWorldSceneInfo_proto from "./PlayerWorldSceneInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3206
}

export interface PlayerWorldSceneInfoListNotify {
	infoList?: PlayerWorldSceneInfo_proto.PlayerWorldSceneInfo[];
}

