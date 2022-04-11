export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8864
}

export interface ActivityTakeAllScoreRewardRsp {
	retcode?: number;
	activityId?: number;
	rewardConfigList?: number[];
}

