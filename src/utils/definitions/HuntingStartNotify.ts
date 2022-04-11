import * as HuntingPair_proto from "./HuntingPair"

import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4307
}

export interface HuntingStartNotify {
	huntingPair?: HuntingPair_proto.HuntingPair;
	cluePosition?: Vector_proto.Vector;
	failTime?: number;
	isFinal?: boolean;
}

