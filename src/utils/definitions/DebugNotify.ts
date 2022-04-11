import * as Retcode_proto from "./Retcode"

export enum Enum {
	ZERO = 0,
	ENET_IS_RELIABLE = 1,
	ENET_CHANNEL_ID = 2,
	TARGET_SERVICE = 101,
	CMD_ID = 101
}

export enum Retcode {
	SUCC = 0,
	FAIL = 1
}

export interface DebugNotify {
	id?: number;
	name?: string;
	retcode?: Retcode_proto.Retcode;
}

