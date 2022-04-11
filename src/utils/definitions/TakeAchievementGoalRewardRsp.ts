import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2682
}

export interface TakeAchievementGoalRewardRsp {
	retcode?: number;
	idList?: number[];
	itemList?: ItemParam_proto.ItemParam[];
}

