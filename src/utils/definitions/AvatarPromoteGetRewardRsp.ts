export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1764
}

export interface AvatarPromoteGetRewardRsp {
	retcode?: number;
	avatarGuid?: number;
	promoteLevel?: number;
	rewardId?: number;
}

