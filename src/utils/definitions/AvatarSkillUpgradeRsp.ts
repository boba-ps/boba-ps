export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1024
}

export interface AvatarSkillUpgradeRsp {
	retcode?: number;
	avatarGuid?: number;
	avatarSkillId?: number;
	oldLevel?: number;
	curLevel?: number;
}

