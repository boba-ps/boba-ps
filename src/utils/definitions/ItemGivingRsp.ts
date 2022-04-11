export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 141
}

export interface ItemGivingRsp {
	retcode?: number;
	givingId?: number;
}

