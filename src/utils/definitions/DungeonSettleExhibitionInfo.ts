import * as OnlinePlayerInfo_proto from "./OnlinePlayerInfo"

import * as ExhibitionDisplayInfo_proto from "./ExhibitionDisplayInfo"

export interface DungeonSettleExhibitionInfo {
	playerInfo?: OnlinePlayerInfo_proto.OnlinePlayerInfo;
	cardList?: ExhibitionDisplayInfo_proto.ExhibitionDisplayInfo[];
}

