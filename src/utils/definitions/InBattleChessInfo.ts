import * as ChessPlayerInfo_proto from "./ChessPlayerInfo"

import * as ChessMysteryInfo_proto from "./ChessMysteryInfo"

import * as ChessCardInfo_proto from "./ChessCardInfo"

export interface InBattleChessInfo {
	round?: number;
	totalRound?: number;
	playerInfoMap?: ChessPlayerInfo_proto.ChessPlayerInfo;
	leftMonsters?: number;
	excapedMonsters?: number;
	maxEscapableMonsters?: number;
	mysteryInfo?: ChessMysteryInfo_proto.ChessMysteryInfo;
	selectedCardInfoList?: ChessCardInfo_proto.ChessCardInfo[];
	banCardTagList?: number[];
}

