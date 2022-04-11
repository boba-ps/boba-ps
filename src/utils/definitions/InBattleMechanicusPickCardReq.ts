export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 5342
}

export interface InBattleMechanicusPickCardReq {
	playIndex?: number;
	groupId?: number;
	cardId?: number;
}

