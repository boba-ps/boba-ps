import * as BuoyantCombatSettleInfo_proto from "./BuoyantCombatSettleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8652
}

export interface BuoyantCombatSettleNotify {
	settleInfo?: BuoyantCombatSettleInfo_proto.BuoyantCombatSettleInfo;
	galleryId?: number;
}

