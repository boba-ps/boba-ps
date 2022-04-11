import * as ForwardType_proto from "./ForwardType"

import * as Vector_proto from "./Vector"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 400
}

export interface EvtCreateGadgetNotify {
	forwardType?: ForwardType_proto.ForwardType;
	entityId?: number;
	configId?: number;
	campId?: number;
	campType?: number;
	initPos?: Vector_proto.Vector;
	initEulerAngles?: Vector_proto.Vector;
	guid?: number;
	ownerEntityId?: number;
	targetEntityId?: number;
	isAsyncLoad?: boolean;
	targetLockPointIndex?: number;
	roomId?: number;
	propOwnerEntityId?: number;
	sightGroupWithOwner?: boolean;
}

