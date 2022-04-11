import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2318
}

export enum PathStatusType {
	STATUS_FAIL = 0,
	STATUS_SUCC = 1,
	STATUS_PARTIAL = 2
}

export interface QueryPathRsp {
	retcode?: number;
	queryId?: number;
	queryStatus?: PathStatusType;
	corners?: Vector_proto.Vector[];
}

