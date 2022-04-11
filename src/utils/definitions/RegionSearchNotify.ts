import * as RegionSearchInfo_proto from "./RegionSearchInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5603
}

export interface RegionSearchNotify {
	regionSearchList?: RegionSearchInfo_proto.RegionSearchInfo[];
	uid?: number;
}

