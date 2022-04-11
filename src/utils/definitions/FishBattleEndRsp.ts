import * as FishBattleResult_proto from "./FishBattleResult"

import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5809
}

export enum FishNoRewardReason {
	FISH_NO_REWARD_NONE = 0,
	FISH_NO_REWARD_ACTIVITY_LIMIT = 1,
	FISH_NO_REWARD_BAG_LIMIT = 2,
	FISH_NO_REWARD_POOL_LIMIT = 3
}

export interface FishBattleEndRsp {
	retcode?: number;
	battleResult?: FishBattleResult_proto.FishBattleResult;
	isGotReward?: boolean;
	noRewardReason?: FishNoRewardReason;
	rewardItemList?: ItemParam_proto.ItemParam[];
	dropItemList?: ItemParam_proto.ItemParam[];
	talentItemList?: ItemParam_proto.ItemParam[];
}

