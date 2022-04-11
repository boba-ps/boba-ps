export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 281
}

export interface GetAreaExplorePointRsp {
	retcode?: number;
	areaIdList?: number[];
	explorePointList?: number[];
}

