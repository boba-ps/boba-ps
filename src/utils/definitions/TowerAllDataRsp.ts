import * as TowerFloorRecord_proto from "./TowerFloorRecord"

import * as TowerCurLevelRecord_proto from "./TowerCurLevelRecord"

import * as TowerMonthlyBrief_proto from "./TowerMonthlyBrief"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2461
}

export interface TowerAllDataRsp {
	towerScheduleId?: number;
	towerFloorRecordList?: TowerFloorRecord_proto.TowerFloorRecord[];
	dailyFloorId?: number;
	dailyLevelIndex?: number;
	curLevelRecord?: TowerCurLevelRecord_proto.TowerCurLevelRecord;
	nextScheduleChangeTime?: number;
	floorOpenTimeMap?: number;
	isFirstInteract?: boolean;
	monthlyBrief?: TowerMonthlyBrief_proto.TowerMonthlyBrief;
	skipToFloorIndex?: number;
	commemorativeRewardId?: number;
	skipFloorGrantedRewardItemMap?: number;
	validTowerRecordNum?: number;
	retcode?: number;
	isFinishedEntranceFloor?: boolean;
	scheduleStartTime?: number;
	lastScheduleMonthlyBrief?: TowerMonthlyBrief_proto.TowerMonthlyBrief;
}

