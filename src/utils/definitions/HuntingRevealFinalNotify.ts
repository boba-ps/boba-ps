import * as HuntingPair_proto from "./HuntingPair"

import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4347
}

export interface HuntingRevealFinalNotify {
	huntingPair?: HuntingPair_proto.HuntingPair;
	finishedGroupId?: number;
	finalPosition?: Vector_proto.Vector;
}

