import * as MapMarkPoint_proto from "./MapMarkPoint"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 3216
}

export enum Operation {
	ADD = 0,
	MOD = 1,
	DEL = 2,
	GET = 3
}

export interface MarkMapReq {
	op?: Operation;
	old?: MapMarkPoint_proto.MapMarkPoint;
	mark?: MapMarkPoint_proto.MapMarkPoint;
}

