export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4255
}

export enum AnchorPointOpType {
	ANCHOR_POINT_OP_NONE = 0,
	ANCHOR_POINT_OP_TELEPORT = 1,
	ANCHOR_POINT_OP_REMOVE = 2
}

export interface AnchorPointOpReq {
	anchorPointOpType?: number;
	anchorPointId?: number;
}

