export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	CMD_ID = 1,
	ENET_IS_RELIABLE = 1
}

export interface PingRsp {
	retcode?: number;
	seq?: number;
	clientTime?: number;
}

