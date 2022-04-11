import * as CityReputationSimpleInfo_proto from "./CityReputationSimpleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2819
}

export interface CityReputationDataNotify {
	simpleInfoList?: CityReputationSimpleInfo_proto.CityReputationSimpleInfo[];
}

