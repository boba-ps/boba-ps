import * as MatchType_proto from "./MatchType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4197
}

export interface PlayerConfirmMatchRsp {
	retcode?: number;
	matchType?: MatchType_proto.MatchType;
	isAgreed?: boolean;
	matchId?: number;
}

