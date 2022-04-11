export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2162
}

export interface ExpeditionTakeRewardRsp {
	retcode?: number;
	pathId?: number;
	isBonus?: boolean;
	rewardLevel?: number;
}
