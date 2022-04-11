export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8505
}

export interface SumoDungeonSettleNotify {
	stageId?: number;
	difficultyId?: number;
	finalScore?: number;
	isNewRecord?: boolean;
	killMonsterNum?: number;
	killEliteMonsterNum?: number;
}

