import * as ForwardType_proto from "./ForwardType"

import * as EvtFaceToDirInfo_proto from "./EvtFaceToDirInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 342
}

export interface EvtFaceToDirNotify {
	forwardType?: ForwardType_proto.ForwardType;
	evtFaceToDirInfo?: EvtFaceToDirInfo_proto.EvtFaceToDirInfo;
}

