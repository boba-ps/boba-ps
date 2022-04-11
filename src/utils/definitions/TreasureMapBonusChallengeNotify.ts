import * as TreasureMapBonusChallengeInfo_proto from "./TreasureMapBonusChallengeInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2009
}

export interface TreasureMapBonusChallengeNotify {
	info?: TreasureMapBonusChallengeInfo_proto.TreasureMapBonusChallengeInfo;
}

