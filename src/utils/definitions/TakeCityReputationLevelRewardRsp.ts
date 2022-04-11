import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2884
}

export interface TakeCityReputationLevelRewardRsp {
	retcode?: number;
	cityId?: number;
	level?: number;
	itemList?: ItemParam_proto.ItemParam[];
}

