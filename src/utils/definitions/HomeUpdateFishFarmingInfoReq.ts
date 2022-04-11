import * as HomeFishFarmingInfo_proto from "./HomeFishFarmingInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4524
}

export interface HomeUpdateFishFarmingInfoReq {
	fishFarmingInfo?: HomeFishFarmingInfo_proto.HomeFishFarmingInfo;
}

