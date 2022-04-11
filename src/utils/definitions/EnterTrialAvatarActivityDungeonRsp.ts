export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2154
}

export interface EnterTrialAvatarActivityDungeonRsp {
	retcode?: number;
	activityId?: number;
	trialAvatarIndexId?: number;
}

