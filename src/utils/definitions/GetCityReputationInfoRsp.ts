import * as CityReputationInfo_proto from "./CityReputationInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2818
}

export interface GetCityReputationInfoRsp {
	retcode?: number;
	cityId?: number;
	cityReputationInfo?: CityReputationInfo_proto.CityReputationInfo;
}

