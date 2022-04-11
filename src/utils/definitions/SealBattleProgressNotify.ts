export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 282
}

export interface SealBattleProgressNotify {
	sealEntityId?: number;
	progress?: number;
	maxProgress?: number;
	endTime?: number;
	sealRadius?: number;
}

