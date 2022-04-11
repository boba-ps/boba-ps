export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2609
}

export interface SetBattlePassViewedRsp {
	retcode?: number;
	scheduleId?: number;
}

