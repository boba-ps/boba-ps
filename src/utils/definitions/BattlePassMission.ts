export enum MissionStatus {
	MISSION_INVALID = 0,
	MISSION_UNFINISHED = 1,
	MISSION_FINISHED = 2,
	MISSION_POINT_TAKEN = 3
}

export interface BattlePassMission {
	missionId?: number;
	curProgress?: number;
	totalProgress?: number;
	rewardBattlePassPoint?: number;
	missionType?: number;
	missionStatus?: MissionStatus;
}

