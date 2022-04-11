import * as BlitzRushStage_proto from "./BlitzRushStage"

import * as ParkourLevelInfo_proto from "./ParkourLevelInfo"

export interface BlitzRushActivityDetailInfo {
	stageList?: BlitzRushStage_proto.BlitzRushStage[];
	contentCloseTime?: number;
	parkourLevelInfoList?: ParkourLevelInfo_proto.ParkourLevelInfo[];
	isContentClosed?: boolean;
}

