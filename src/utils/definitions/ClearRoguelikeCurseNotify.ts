export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8680
}

export interface ClearRoguelikeCurseNotify {
	isClearAll?: boolean;
	clearCurseMap?: number;
	cardId?: number;
	isCurseAllClear?: boolean;
}

