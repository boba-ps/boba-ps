export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 976
}

export interface DungeonCandidateTeamInviteNotify {
	playerUid?: number;
	dungeonId?: number;
	vaildDeadlineTimeSec?: number;
}

