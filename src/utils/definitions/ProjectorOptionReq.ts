export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 883
}

export enum ProjectorOpType {
	PROJECTOR_OP_NONE = 0,
	PROJECTOR_OP_CREATE = 1,
	PROJECTOR_OP_DESTROY = 2
}

export interface ProjectorOptionReq {
	opType?: number;
	entityId?: number;
}

