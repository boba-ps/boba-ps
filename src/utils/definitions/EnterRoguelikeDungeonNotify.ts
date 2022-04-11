import * as RogueCellInfo_proto from "./RogueCellInfo"

import * as RoguelikeRuneRecord_proto from "./RoguelikeRuneRecord"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8992
}

export interface EnterRoguelikeDungeonNotify {
	dungeonWeightConfigId?: number;
	dungeonId?: number;
	onstageAvatarGuidList?: number[];
	backstageAvatarGuidList?: number[];
	curCellId?: number;
	cellInfoMap?: RogueCellInfo_proto.RogueCellInfo;
	curLevel?: number;
	stageId?: number;
	runeRecordList?: RoguelikeRuneRecord_proto.RoguelikeRuneRecord[];
	isMistClear?: boolean;
	exploredCellList?: number[];
	bonusResourceProp?: number;
	refreshCostItemId?: number;
	refreshCostItemCount?: number;
	isFirstEnter?: boolean;
	reviseMonsterLevel?: number;
}

