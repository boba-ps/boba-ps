import * as SummerTimeStageInfo_proto from "./SummerTimeStageInfo"

import * as SummerTimeSprintBoatInfo_proto from "./SummerTimeSprintBoatInfo"

export interface SummerTimeDetailInfo {
	stageMap?: SummerTimeStageInfo_proto.SummerTimeStageInfo;
	isContentClosed?: boolean;
	contentCloseTime?: number;
	sprintBoatInfo?: SummerTimeSprintBoatInfo_proto.SummerTimeSprintBoatInfo;
}

