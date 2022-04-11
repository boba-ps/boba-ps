import * as MatchType_proto from "./MatchType"

import * as OnlinePlayerInfo_proto from "./OnlinePlayerInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4198
}

export interface PlayerApplyEnterMpAfterMatchAgreedNotify {
	matchType?: MatchType_proto.MatchType;
	srcPlayerInfo?: OnlinePlayerInfo_proto.OnlinePlayerInfo;
	matchserverId?: number;
}

