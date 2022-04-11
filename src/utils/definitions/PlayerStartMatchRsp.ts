import * as MatchType_proto from "./MatchType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4193
}

export interface PlayerStartMatchRsp {
	retcode?: number;
	matchType?: MatchType_proto.MatchType;
	param?: number;
	dungeonId?: number;
	mpPlayId?: number;
	mechanicusDifficultLevel?: number;
	matchId?: number;
	punishEndTime?: number;
}

