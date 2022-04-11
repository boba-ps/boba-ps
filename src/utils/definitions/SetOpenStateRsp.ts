export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 116
}

export interface SetOpenStateRsp {
	retcode?: number;
	key?: number;
	value?: number;
}

