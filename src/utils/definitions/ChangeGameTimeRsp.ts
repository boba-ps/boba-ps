export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 179
}

export interface ChangeGameTimeRsp {
	retcode?: number;
	curGameTime?: number;
	extraDays?: number;
}

