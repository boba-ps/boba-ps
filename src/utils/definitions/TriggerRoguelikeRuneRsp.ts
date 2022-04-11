export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8959
}

export interface TriggerRoguelikeRuneRsp {
	retcode?: number;
	runeId?: number;
	availableCount?: number;
}

