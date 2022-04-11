export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 880
}

export interface RequestLiveInfoRsp {
	retcode?: number;
	liveId?: number;
	liveUrl?: string;
	spareLiveUrl?: string;
}

