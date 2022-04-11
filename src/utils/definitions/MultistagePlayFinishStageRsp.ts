export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5336
}

export interface MultistagePlayFinishStageRsp {
	retcode?: number;
	playIndex?: number;
	groupId?: number;
}

