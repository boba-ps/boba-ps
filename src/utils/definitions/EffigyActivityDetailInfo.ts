import * as EffigyDailyInfo_proto from "./EffigyDailyInfo"

export interface EffigyActivityDetailInfo {
	dailyInfoList?: EffigyDailyInfo_proto.EffigyDailyInfo[];
	lastDifficultyId?: number;
	curScore?: number;
	takenRewardIndexList?: number[];
}

