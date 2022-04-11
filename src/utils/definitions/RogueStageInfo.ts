import * as RogueShowAvatarTeamInfo_proto from "./RogueShowAvatarTeamInfo"

import * as RoguelikeRuneRecord_proto from "./RoguelikeRuneRecord"

export interface RogueStageInfo {
	stageId?: number;
	isOpen?: boolean;
	coinCNum?: number;
	maxPassedLevel?: number;
	isInCombat?: boolean;
	isPassed?: boolean;
	isTakenReward?: boolean;
	avatarTeam?: RogueShowAvatarTeamInfo_proto.RogueShowAvatarTeamInfo;
	curLevel?: number;
	exploreCellNum?: number;
	runeRecordList?: RoguelikeRuneRecord_proto.RoguelikeRuneRecord[];
	isExplored?: boolean;
	cachedCoinBNum?: number;
	cachedCoinCNum?: number;
	reviseMonsterLevel?: number;
}

