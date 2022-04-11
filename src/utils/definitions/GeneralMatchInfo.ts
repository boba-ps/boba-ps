import * as MatchPlayerInfo_proto from "./MatchPlayerInfo"

export interface GeneralMatchInfo {
	matchId?: number;
	playerList?: MatchPlayerInfo_proto.MatchPlayerInfo[];
	matchParam?: number;
}

