import * as FleurFairBalloonSettleInfo_proto from "./FleurFairBalloonSettleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2067
}

export interface FleurFairBalloonSettleNotify {
	settleInfoMap?: FleurFairBalloonSettleInfo_proto.FleurFairBalloonSettleInfo;
	minigameId?: number;
}

