export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2057
}

export interface SalesmanTakeSpecialRewardRsp {
	retcode?: number;
	scheduleId?: number;
}

