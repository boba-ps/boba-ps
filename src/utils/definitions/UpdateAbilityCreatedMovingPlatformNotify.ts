export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 836
}

export enum OpType {
	OP_NONE = 0,
	OP_ACTIVATE = 1,
	OP_DEACTIVATE = 2
}

export interface UpdateAbilityCreatedMovingPlatformNotify {
	opType?: OpType;
	entityId?: number;
}

