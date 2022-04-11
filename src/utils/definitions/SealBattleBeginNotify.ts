import * as SealBattleType_proto from "./SealBattleType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 240
}

export interface SealBattleBeginNotify {
	sealEntityId?: number;
	sealRadius?: number;
	sealMaxProgress?: number;
	battleType?: SealBattleType_proto.SealBattleType;
}

