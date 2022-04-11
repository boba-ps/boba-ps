import * as ChessPlayerInfo_proto from "./ChessPlayerInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5382
}

export interface ChessPlayerInfoNotify {
	playerInfo?: ChessPlayerInfo_proto.ChessPlayerInfo;
}

