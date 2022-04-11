export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3926
}

export interface EnterMechanicusDungeonRsp {
	retcode?: number;
	difficultLevel?: number;
	dungeonId?: number;
	wrongUid?: number;
}

