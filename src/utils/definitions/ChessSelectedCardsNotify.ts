import * as ChessCardInfo_proto from "./ChessCardInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5374
}

export interface ChessSelectedCardsNotify {
	selectedCardInfoList?: ChessCardInfo_proto.ChessCardInfo[];
}

