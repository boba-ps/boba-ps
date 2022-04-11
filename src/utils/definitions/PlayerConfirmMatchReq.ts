import * as MatchType_proto from "./MatchType"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4165
}

export interface PlayerConfirmMatchReq {
	matchType?: MatchType_proto.MatchType;
	isAgreed?: boolean;
}

