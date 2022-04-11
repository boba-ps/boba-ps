export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 432
}

export interface QuestUpdateQuestVarNotify {
	parentQuestId?: number;
	questVar?: number[];
	parentQuestVarSeq?: number;
}

