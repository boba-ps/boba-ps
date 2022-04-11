import * as HomeFishFarmingInfo_proto from "./HomeFishFarmingInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4716
}

export interface HomeGetFishFarmingInfoRsp {
	retcode?: number;
	fishFarmingInfoList?: HomeFishFarmingInfo_proto.HomeFishFarmingInfo[];
}

