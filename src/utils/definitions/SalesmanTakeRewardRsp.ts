export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2096
}

export interface SalesmanTakeRewardRsp {
	retcode?: number;
	scheduleId?: number;
	rewardId?: number;
	position?: number;
}

