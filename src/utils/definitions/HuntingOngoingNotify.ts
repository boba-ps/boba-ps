import * as HuntingPair_proto from "./HuntingPair"

import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4348
}

export interface HuntingOngoingNotify {
	huntingPair?: HuntingPair_proto.HuntingPair;
	nextPosition?: Vector_proto.Vector;
	failTime?: number;
	isStarted?: boolean;
	finishClueCount?: number;
	isFinal?: boolean;
}

