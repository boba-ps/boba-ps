import * as Vector_proto from "./Vector"

import * as FishEscapeReason_proto from "./FishEscapeReason"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5815
}

export interface FishEscapeNotify {
	fishIdList?: number[];
	pos?: Vector_proto.Vector;
	uid?: number;
	reason?: FishEscapeReason_proto.FishEscapeReason;
}

