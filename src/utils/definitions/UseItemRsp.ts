export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 661
}

export interface UseItemRsp {
	retcode?: number;
	guid?: number;
	itemId?: number;
	targetGuid?: number;
	optionIdx?: number;
}

