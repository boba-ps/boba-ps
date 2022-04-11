export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1124
}

export enum UpdateType {
	INVALUE = 0,
	ADD = 1,
	SET = 2
}

export interface ServerUpdateGlobalValueNotify {
	entityId?: number;
	keyHash?: number;
	updateType?: UpdateType;
	delta?: number;
	value?: number;
}

