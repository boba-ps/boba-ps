import * as ChessNormalCardInfo_proto from "./ChessNormalCardInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5328
}

export interface ChessPickCardNotify {
	normalCardInfo?: ChessNormalCardInfo_proto.ChessNormalCardInfo;
	curseCardId?: number;
}

