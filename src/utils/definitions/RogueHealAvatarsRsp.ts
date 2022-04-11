export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8168
}

export interface RogueHealAvatarsRsp {
	retcode?: number;
	cellId?: number;
	dungeonId?: number;
}

