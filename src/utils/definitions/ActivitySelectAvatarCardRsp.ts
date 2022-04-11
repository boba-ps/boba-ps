export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2133
}

export interface ActivitySelectAvatarCardRsp {
	retcode?: number;
	activityId?: number;
	rewardId?: number;
}

