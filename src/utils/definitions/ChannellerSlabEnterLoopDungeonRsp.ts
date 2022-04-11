export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8212
}

export interface ChannellerSlabEnterLoopDungeonRsp {
	retcode?: number;
	dungeonIndex?: number;
	difficultyId?: number;
	conditionIdList?: number[];
	pointId?: number;
}

