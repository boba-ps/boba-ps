export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1018
}

export interface UnlockAvatarTalentRsp {
	retcode?: number;
	avatarGuid?: number;
	talentId?: number;
}

