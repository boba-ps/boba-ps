import * as HomeSceneArrangementInfo_proto from "./HomeSceneArrangementInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4579
}

export interface HomeUpdateArrangementInfoReq {
	sceneArrangementInfo?: HomeSceneArrangementInfo_proto.HomeSceneArrangementInfo;
}

