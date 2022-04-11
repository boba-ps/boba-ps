import * as ForwardType_proto from "./ForwardType"

import * as EvtAnimatorParameterInfo_proto from "./EvtAnimatorParameterInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 318
}

export interface EvtAnimatorParameterNotify {
	forwardType?: ForwardType_proto.ForwardType;
	animatorParamInfo?: EvtAnimatorParameterInfo_proto.EvtAnimatorParameterInfo;
}

