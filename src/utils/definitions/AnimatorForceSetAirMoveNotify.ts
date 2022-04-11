import * as ForwardType_proto from "./ForwardType"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 395
}

export interface AnimatorForceSetAirMoveNotify {
	forwardType?: ForwardType_proto.ForwardType;
	entityId?: number;
	inAirMove?: boolean;
}

