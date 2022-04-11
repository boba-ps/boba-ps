import * as ForwardType_proto from "./ForwardType"

import * as Vector_proto from "./Vector"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 391
}

export interface EvtBulletDeactiveNotify {
	forwardType?: ForwardType_proto.ForwardType;
	entityId?: number;
	disappearPos?: Vector_proto.Vector;
}

