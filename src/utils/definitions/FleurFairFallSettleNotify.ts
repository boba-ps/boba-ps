import * as FleurFairFallSettleInfo_proto from "./FleurFairFallSettleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2145
}

export interface FleurFairFallSettleNotify {
	settleInfoMap?: FleurFairFallSettleInfo_proto.FleurFairFallSettleInfo;
	minigameId?: number;
}

