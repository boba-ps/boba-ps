export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2059
}

export interface StartArenaChallengeLevelRsp {
	retcode?: number;
	gadgetEntityId?: number;
	arenaChallengeId?: number;
	arenaChallengeLevel?: number;
}

