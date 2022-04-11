import * as BonusOpActivityInfo_proto from "./BonusOpActivityInfo"

export interface OpActivityInfo {
	bonusInfo?: BonusOpActivityInfo_proto.BonusOpActivityInfo;
	activityId?: number;
	scheduleId?: number;
	beginTime?: number;
	endTime?: number;
	isHasChange?: boolean;
}

