export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1704
}

export interface AvatarFetterLevelRewardRsp {
	retcode?: number;
	avatarGuid?: number;
	fetterLevel?: number;
	rewardId?: number;
}

