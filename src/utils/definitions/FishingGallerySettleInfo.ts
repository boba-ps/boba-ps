import * as FishInfo_proto from "./FishInfo"

import * as FishingScore_proto from "./FishingScore"

export interface FishingGallerySettleInfo {
	fishMap?: FishInfo_proto.FishInfo;
	fishingScoreList?: FishingScore_proto.FishingScore[];
}

