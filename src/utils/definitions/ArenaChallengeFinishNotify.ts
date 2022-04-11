import * as ArenaChallengeChildChallengeInfo_proto from "./ArenaChallengeChildChallengeInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2173
}

export interface ArenaChallengeFinishNotify {
	arenaChallengeId?: number;
	arenaChallengeLevel?: number;
	isSuccess?: boolean;
	childChallengeList?: ArenaChallengeChildChallengeInfo_proto.ArenaChallengeChildChallengeInfo[];
}

