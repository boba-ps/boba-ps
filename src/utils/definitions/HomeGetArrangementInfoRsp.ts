import * as HomeSceneArrangementInfo_proto from "./HomeSceneArrangementInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4651
}

export interface HomeGetArrangementInfoRsp {
	retcode?: number;
	sceneArrangementInfoList?: HomeSceneArrangementInfo_proto.HomeSceneArrangementInfo[];
}

