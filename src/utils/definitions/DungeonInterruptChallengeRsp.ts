export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 966
}

export interface DungeonInterruptChallengeRsp {
	retcode?: number;
	challengeId?: number;
	challengeIndex?: number;
	groupId?: number;
}

