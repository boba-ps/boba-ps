import * as Reward_proto from "./Reward"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 683
}

export interface GrantRewardNotify {
	reward?: Reward_proto.Reward;
}

