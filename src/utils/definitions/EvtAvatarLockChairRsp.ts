import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 305
}

export interface EvtAvatarLockChairRsp {
	retcode?: number;
	entityId?: number;
	position?: Vector_proto.Vector;
	chairId?: number;
}

