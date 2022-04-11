export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 420
}

export interface UnlockPersonalLineRsp {
	level?: number;
	chapterId?: number;
	retcode?: number;
	personalLineId?: number;
}

