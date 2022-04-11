export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5361
}

export interface InBattleMechanicusPickCardRsp {
	retcode?: number;
	playIndex?: number;
	groupId?: number;
	cardId?: number;
}

