export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5098
}

export interface TakeReunionWatcherRewardRsp {
	retcode?: number;
	missionId?: number;
	watcherId?: number;
}

