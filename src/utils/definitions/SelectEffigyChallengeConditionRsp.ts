export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2128
}

export interface SelectEffigyChallengeConditionRsp {
	retcode?: number;
	challengeId?: number;
	difficultyId?: number;
	conditionIdList?: number[];
}

