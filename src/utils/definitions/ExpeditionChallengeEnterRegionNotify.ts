export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2163
}

export interface ExpeditionChallengeEnterRegionNotify {
	isPuzzleFinished?: boolean;
	id?: number;
}

