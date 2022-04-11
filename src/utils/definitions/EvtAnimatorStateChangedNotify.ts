import * as ForwardType_proto from "./ForwardType"

import * as EvtAnimatorStateChangedInfo_proto from "./EvtAnimatorStateChangedInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 312
}

export interface EvtAnimatorStateChangedNotify {
	forwardType?: ForwardType_proto.ForwardType;
	evtAnimatorStateChangedInfo?: EvtAnimatorStateChangedInfo_proto.EvtAnimatorStateChangedInfo;
}

