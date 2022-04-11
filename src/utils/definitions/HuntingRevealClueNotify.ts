import * as HuntingPair_proto from "./HuntingPair"

import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4315
}

export interface HuntingRevealClueNotify {
	huntingPair?: HuntingPair_proto.HuntingPair;
	finishedGroupId?: number;
	cluePosition?: Vector_proto.Vector;
	finishClueCount?: number;
}

