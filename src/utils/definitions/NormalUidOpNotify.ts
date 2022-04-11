export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5703
}

export interface NormalUidOpNotify {
	paramIndex?: number;
	paramList?: number[];
	paramUidList?: number[];
	duration?: number;
}

