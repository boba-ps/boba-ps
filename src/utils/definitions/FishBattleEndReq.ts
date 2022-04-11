import * as FishBattleResult_proto from "./FishBattleResult"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 5844
}

export interface FishBattleEndReq {
	battleResult?: FishBattleResult_proto.FishBattleResult;
	isAlwaysBonus?: boolean;
	maxBonusTime?: number;
}

