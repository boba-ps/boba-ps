import * as OnlinePlayerInfo_proto from "./OnlinePlayerInfo"

import * as ExhibitionDisplayInfo_proto from "./ExhibitionDisplayInfo"

export interface BounceConjuringGallerySettleInfo {
	score?: number;
	destroyedMachineCount?: number;
	damage?: number;
	normalHitCount?: number;
	perfectHitCount?: number;
	feverCount?: number;
	playerInfo?: OnlinePlayerInfo_proto.OnlinePlayerInfo;
	cardList?: ExhibitionDisplayInfo_proto.ExhibitionDisplayInfo[];
	gadgetCountMap?: number;
}

