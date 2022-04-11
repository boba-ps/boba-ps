import * as RoguelikeSettleCoinInfo_proto from "./RoguelikeSettleCoinInfo"

export interface RoguelikeDungeonSettleInfo {
	stageId?: number;
	curLevel?: number;
	finishedChallengeCellNumMap?: RoguelikeSettleCoinInfo_proto.RoguelikeSettleCoinInfo;
	isFinalLevel?: boolean;
	totalCoinBNum?: number;
	totalCoinCNum?: number;
	isCoinCReachLimit?: boolean;
}

