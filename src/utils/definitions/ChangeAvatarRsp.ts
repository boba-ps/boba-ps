export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1634
}

export interface ChangeAvatarRsp {
	retcode?: number;
	curGuid?: number;
	skillId?: number;
}

