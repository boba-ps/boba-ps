import * as SalesmanStatusType_proto from "./SalesmanStatusType"

export interface SalesmanActivityDetailInfo {
	status?: SalesmanStatusType_proto.SalesmanStatusType;
	dayIndex?: number;
	lastDeliverTime?: number;
	deliverCount?: number;
	selectedRewardIdMap?: number;
	dayRewardId?: number;
	specialRewardPreviewId?: number;
	condDayCount?: number;
	isHasTakenSpecialReward?: boolean;
	isTodayHasDelivered?: boolean;
}

