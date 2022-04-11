import * as HomeBasicInfo_proto from "./HomeBasicInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4607
}

export interface HomeBasicInfoNotify {
	basicInfo?: HomeBasicInfo_proto.HomeBasicInfo;
}

