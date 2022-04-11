import * as ForwardType_proto from "./ForwardType"

import * as HitColliderType_proto from "./HitColliderType"

import * as Vector_proto from "./Vector"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 324
}

export interface EvtBulletHitNotify {
	forwardType?: ForwardType_proto.ForwardType;
	forwardPeer?: number;
	entityId?: number;
	hitEntityId?: number;
	hitColliderType?: HitColliderType_proto.HitColliderType;
	hitBoxIndex?: number;
	hitPoint?: Vector_proto.Vector;
	hitNormal?: Vector_proto.Vector;
}

