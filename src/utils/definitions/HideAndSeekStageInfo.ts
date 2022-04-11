import * as HideAndSeekStageType_proto from "./HideAndSeekStageType"

import * as HideAndSeekPlayerBattleInfo_proto from "./HideAndSeekPlayerBattleInfo"

export interface HideAndSeekStageInfo {
	stageType?: HideAndSeekStageType_proto.HideAndSeekStageType;
	hunterUid?: number;
	hiderUidList?: number[];
	battleInfoMap?: HideAndSeekPlayerBattleInfo_proto.HideAndSeekPlayerBattleInfo;
	mapId?: number;
}

