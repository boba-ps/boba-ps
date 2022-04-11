import * as TreasureMapRegionInfo_proto from "./TreasureMapRegionInfo"

import * as TreasureMapBonusChallengeInfo_proto from "./TreasureMapBonusChallengeInfo"

export interface TreasureMapActivityDetailInfo {
	regionInfoList?: TreasureMapRegionInfo_proto.TreasureMapRegionInfo[];
	activeRegionIndex?: number;
	treasureCloseTime?: number;
	previewRewardId?: number;
	minOpenPlayerLevel?: number;
	currencyNum?: number;
	bonusChallengeList?: TreasureMapBonusChallengeInfo_proto.TreasureMapBonusChallengeInfo[];
	isMpChallengeTouched?: boolean;
	totalMpSpotNum?: number;
}

