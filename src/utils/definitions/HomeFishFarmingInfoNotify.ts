import * as HomeFishFarmingInfo_proto from "./HomeFishFarmingInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4756
}

export interface HomeFishFarmingInfoNotify {
	fishFarmingInfoList?: HomeFishFarmingInfo_proto.HomeFishFarmingInfo[];
}

