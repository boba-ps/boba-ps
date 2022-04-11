export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2449
}

export interface TowerBriefDataNotify {
	towerScheduleId?: number;
	nextScheduleChangeTime?: number;
	totalStarNum?: number;
	lastFloorIndex?: number;
	lastLevelIndex?: number;
	isFinishedEntranceFloor?: boolean;
	scheduleStartTime?: number;
}

