import * as InBattleMechanicusInfo_proto from "./InBattleMechanicusInfo"

import * as InBattleFleurFairInfo_proto from "./InBattleFleurFairInfo"

import * as HideAndSeekStageInfo_proto from "./HideAndSeekStageInfo"

import * as InBattleChessInfo_proto from "./InBattleChessInfo"

export interface MultistagePlayInfo {
	mechanicusInfo?: InBattleMechanicusInfo_proto.InBattleMechanicusInfo;
	fleurFairInfo?: InBattleFleurFairInfo_proto.InBattleFleurFairInfo;
	hideAndSeekInfo?: HideAndSeekStageInfo_proto.HideAndSeekStageInfo;
	chessInfo?: InBattleChessInfo_proto.InBattleChessInfo;
	playIndex?: number;
	groupId?: number;
	stageIndex?: number;
	stageType?: number;
	beginTime?: number;
	duration?: number;
	playType?: number;
}

