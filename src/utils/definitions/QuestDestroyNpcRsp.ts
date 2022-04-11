export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 406
}

export interface QuestDestroyNpcRsp {
	retcode?: number;
	npcId?: number;
	parentQuestId?: number;
}

