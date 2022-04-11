import * as CoopReward_proto from "./CoopReward"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2000
}

export interface CoopRewardUpdateNotify {
	rewardList?: CoopReward_proto.CoopReward[];
}

