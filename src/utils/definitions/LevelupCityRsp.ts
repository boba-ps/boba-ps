import * as CityInfo_proto from "./CityInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 297
}

export interface LevelupCityRsp {
	retcode?: number;
	sceneId?: number;
	areaId?: number;
	cityInfo?: CityInfo_proto.CityInfo;
}

