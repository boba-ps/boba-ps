export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5379
}

export interface InBattleMechanicusPickCardNotify {
	playIndex?: number;
	groupId?: number;
	playerUid?: number;
	cardId?: number;
}

