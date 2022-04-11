import * as ForwardType_proto from "./ForwardType"

import * as EvtBeingHitInfo_proto from "./EvtBeingHitInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 375
}

export interface EvtBeingHitsCombineNotify {
	forwardType?: ForwardType_proto.ForwardType;
	evtBeingHitInfoList?: EvtBeingHitInfo_proto.EvtBeingHitInfo[];
}

