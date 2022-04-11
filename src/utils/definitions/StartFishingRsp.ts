export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5805
}

export interface StartFishingRsp {
	retcode?: number;
	fishPoolId?: number;
}

