import * as MatchType_proto from "./MatchType"

import * as GeneralMatchInfo_proto from "./GeneralMatchInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4157
}

export interface PlayerMatchSuccNotify {
	matchType?: MatchType_proto.MatchType;
	confirmEndTime?: number;
	hostUid?: number;
	dungeonId?: number;
	mpPlayId?: number;
	mechanicusDifficultLevel?: number;
	generalMatchInfo?: GeneralMatchInfo_proto.GeneralMatchInfo;
}

