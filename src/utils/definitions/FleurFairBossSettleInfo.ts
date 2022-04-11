import * as FleurFairPlayerStatInfo_proto from "./FleurFairPlayerStatInfo"

export interface FleurFairBossSettleInfo {
	isSuccess?: boolean;
	costTime?: number;
	energy?: number;
	statInfoList?: FleurFairPlayerStatInfo_proto.FleurFairPlayerStatInfo[];
	rewardTokenNum?: number;
}

