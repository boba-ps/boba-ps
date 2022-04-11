export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4056
}

export interface RemoveBlacklistRsp {
	retcode?: number;
	targetUid?: number;
}

