export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8043
}

export interface DoRoguelikeDungeonCardGachaRsp {
	retcode?: number;
	cardList?: number[];
	isCanRefresh?: boolean;
}

