import * as Vector_proto from "./Vector"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 5203
}

export enum MiracleRingOpType {
	MIRACLE_RING_OP_NONE = 0,
	MIRACLE_RING_OP_PLACE = 1,
	MIRACLE_RING_OP_RETRACT = 2
}

export interface UseMiracleRingReq {
	miracleRingOpType?: number;
	pos?: Vector_proto.Vector;
	rot?: Vector_proto.Vector;
}

