import * as CityInfo_proto from "./CityInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 216
}

export interface GetSceneAreaRsp {
	retcode?: number;
	sceneId?: number;
	areaIdList?: number[];
	cityInfoList?: CityInfo_proto.CityInfo[];
}

