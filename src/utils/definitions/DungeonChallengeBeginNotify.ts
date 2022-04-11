export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 915
}

export interface DungeonChallengeBeginNotify {
	challengeId?: number;
	challengeIndex?: number;
	paramList?: number[];
	groupId?: number;
	fatherIndex?: number;
	uidList?: number[];
}

