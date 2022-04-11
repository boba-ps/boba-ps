import * as ForwardType_proto from "./ForwardType"

import * as EvtRushMoveInfo_proto from "./EvtRushMoveInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 326
}

export interface EvtRushMoveNotify {
	forwardType?: ForwardType_proto.ForwardType;
	evtRushMoveInfo?: EvtRushMoveInfo_proto.EvtRushMoveInfo;
}

