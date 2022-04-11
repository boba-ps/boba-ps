export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 901
}

export interface PlayerQuitDungeonRsp {
	retcode?: number;
	pointId?: number;
}

