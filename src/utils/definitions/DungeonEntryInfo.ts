import * as WeeklyBossResinDiscountInfo_proto from "./WeeklyBossResinDiscountInfo"

export interface DungeonEntryInfo {
	dungeonId?: number;
	isPassed?: boolean;
	leftTimes?: number;
	startTime?: number;
	endTime?: number;
	maxBossChestNum?: number;
	bossChestNum?: number;
	nextRefreshTime?: number;
	weeklyBossResinDiscountInfo?: WeeklyBossResinDiscountInfo_proto.WeeklyBossResinDiscountInfo;
}

