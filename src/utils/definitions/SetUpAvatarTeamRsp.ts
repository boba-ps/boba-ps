export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1744
}

export interface SetUpAvatarTeamRsp {
	retcode?: number;
	teamId?: number;
	avatarTeamGuidList?: number[];
	curAvatarGuid?: number;
}

