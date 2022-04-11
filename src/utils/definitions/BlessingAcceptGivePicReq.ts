export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 2104
}

export interface BlessingAcceptGivePicReq {
	uid?: number;
	index?: number;
}

