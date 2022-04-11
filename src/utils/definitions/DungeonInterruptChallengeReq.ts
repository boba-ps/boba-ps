export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 908
}

export interface DungeonInterruptChallengeReq {
	challengeId?: number;
	challengeIndex?: number;
	groupId?: number;
}

