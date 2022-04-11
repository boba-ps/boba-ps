import * as MatchType_proto from "./MatchType"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4153
}

export interface PlayerStartMatchReq {
	matchType?: MatchType_proto.MatchType;
	dungeonId?: number;
	mpPlayId?: number;
	mechanicusDifficultLevel?: number;
	matchId?: number;
	matchParamList?: number[];
}

