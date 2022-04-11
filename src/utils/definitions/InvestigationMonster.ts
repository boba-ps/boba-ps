import * as Vector_proto from "./Vector"

import * as WeeklyBossResinDiscountInfo_proto from "./WeeklyBossResinDiscountInfo"

export enum LockState {
	LOCK_NONE = 0,
	LOCK_QUEST = 1
}

export interface InvestigationMonster {
	id?: number;
	cityId?: number;
	level?: number;
	isAlive?: boolean;
	nextRefreshTime?: number;
	refreshInterval?: number;
	pos?: Vector_proto.Vector;
	lockState?: LockState;
	maxBossChestNum?: number;
	bossChestNum?: number;
	resin?: number;
	isAreaLocked?: boolean;
	nextBossChestRefreshTime?: number;
	weeklyBossResinDiscountInfo?: WeeklyBossResinDiscountInfo_proto.WeeklyBossResinDiscountInfo;
	sceneId?: number;
	groupId?: number;
	monsterId?: number;
}

