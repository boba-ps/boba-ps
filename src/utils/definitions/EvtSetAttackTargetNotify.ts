import * as ForwardType_proto from "./ForwardType"

import * as EvtSetAttackTargetInfo_proto from "./EvtSetAttackTargetInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 379
}

export interface EvtSetAttackTargetNotify {
	forwardType?: ForwardType_proto.ForwardType;
	evtSetAttackTargetInfo?: EvtSetAttackTargetInfo_proto.EvtSetAttackTargetInfo;
}

