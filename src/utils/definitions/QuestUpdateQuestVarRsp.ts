export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 470
}

export interface QuestUpdateQuestVarRsp {
	retcode?: number;
	questId?: number;
	parentQuestId?: number;
	parentQuestVarSeq?: number;
}

