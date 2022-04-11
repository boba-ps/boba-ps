export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1501
}

export interface GachaWishRsp {
	retcode?: number;
	gachaType?: number;
	gachaScheduleId?: number;
	wishItemId?: number;
	wishProgress?: number;
	wishMaxProgress?: number;
}

