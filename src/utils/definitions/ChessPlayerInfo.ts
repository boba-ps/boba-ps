import * as ChessNormalCardInfo_proto from "./ChessNormalCardInfo"

export interface ChessPlayerInfo {
	uid?: number;
	buildingPoints?: number;
	freeRefreshCount?: number;
	freeRefreshLimit?: number;
	candidateCardInfoList?: ChessNormalCardInfo_proto.ChessNormalCardInfo[];
	candidateIndex?: number;
	refreshCost?: number;
}

