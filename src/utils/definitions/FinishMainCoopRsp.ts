export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1982
}

export interface FinishMainCoopRsp {
	retcode?: number;
	id?: number;
	endingSavePointId?: number;
}

