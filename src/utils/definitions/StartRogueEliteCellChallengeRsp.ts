export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8703
}

export interface StartRogueEliteCellChallengeRsp {
	retcode?: number;
	cellId?: number;
	dungeonId?: number;
}

