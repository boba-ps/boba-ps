import * as ExhibitionDisplayInfo_proto from "./ExhibitionDisplayInfo"

export interface InBattleChessSettleInfo {
	isSuccess?: boolean;
	scoreList?: ExhibitionDisplayInfo_proto.ExhibitionDisplayInfo[];
	chessLevel?: number;
	chessExp?: number;
	oldChessLevel?: number;
	oldChessExp?: number;
	sceneTimeMs?: number;
}

