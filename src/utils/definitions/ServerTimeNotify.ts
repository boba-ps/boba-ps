export enum CmdId {
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	ENET_CHANNEL_ID = 1,
	CMD_ID = 79
}

export interface ServerTimeNotify {
	serverTime?: number;
}

