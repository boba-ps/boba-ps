export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8259
}

export interface RoguelikeCardGachaNotify {
	cardList?: number[];
	isCanRefresh?: boolean;
}

