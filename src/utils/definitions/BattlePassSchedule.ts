import * as BattlePassUnlockStatus_proto from "./BattlePassUnlockStatus"

import * as BattlePassRewardTag_proto from "./BattlePassRewardTag"

import * as BattlePassCycle_proto from "./BattlePassCycle"

import * as BattlePassProduct_proto from "./BattlePassProduct"

export interface BattlePassSchedule {
	scheduleId?: number;
	level?: number;
	point?: number;
	unlockStatus?: BattlePassUnlockStatus_proto.BattlePassUnlockStatus;
	rewardTakenList?: BattlePassRewardTag_proto.BattlePassRewardTag[];
	beginTime?: number;
	endTime?: number;
	curCycle?: BattlePassCycle_proto.BattlePassCycle;
	isExtraPaidRewardTaken?: boolean;
	productInfo?: BattlePassProduct_proto.BattlePassProduct;
	isViewed?: boolean;
	curCyclePoints?: number;
}

