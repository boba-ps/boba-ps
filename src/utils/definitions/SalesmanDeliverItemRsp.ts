export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2055
}

export interface SalesmanDeliverItemRsp {
	retcode?: number;
	scheduleId?: number;
}
