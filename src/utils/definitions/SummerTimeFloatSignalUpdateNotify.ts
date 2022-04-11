import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8319
}

export interface SummerTimeFloatSignalUpdateNotify {
	floatSignalId?: number;
	position?: Vector_proto.Vector;
	isTransferAnchor?: boolean;
}

