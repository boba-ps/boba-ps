import * as ExpeditionPathInfo_proto from "./ExpeditionPathInfo"

import * as ExpeditionChallengeInfo_proto from "./ExpeditionChallengeInfo"

export interface ExpeditionActivityDetailInfo {
	pathInfoList?: ExpeditionPathInfo_proto.ExpeditionPathInfo[];
	expeditionCount?: number;
	challengeInfoList?: ExpeditionChallengeInfo_proto.ExpeditionChallengeInfo[];
	isContentClosed?: boolean;
	contentCloseTime?: number;
	curChallengeId?: number;
}

