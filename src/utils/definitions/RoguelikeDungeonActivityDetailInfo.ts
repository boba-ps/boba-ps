import * as RoguelikeShikigamiRecord_proto from "./RoguelikeShikigamiRecord"

import * as RogueStageInfo_proto from "./RogueStageInfo"

export interface RoguelikeDungeonActivityDetailInfo {
	runeList?: number[];
	shikigamiList?: RoguelikeShikigamiRecord_proto.RoguelikeShikigamiRecord[];
	stageList?: RogueStageInfo_proto.RogueStageInfo[];
	equippedRuneList?: number[];
	isContentClosed?: boolean;
	contentCloseTime?: number;
}

