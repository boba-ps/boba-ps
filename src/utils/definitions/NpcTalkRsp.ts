export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 518
}

export interface NpcTalkRsp {
	retcode?: number;
	npcEntityId?: number;
	curTalkId?: number;
	entityId?: number;
}

