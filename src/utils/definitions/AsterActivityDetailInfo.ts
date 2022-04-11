import * as AsterLittleDetailInfo_proto from "./AsterLittleDetailInfo"

import * as AsterMidDetailInfo_proto from "./AsterMidDetailInfo"

import * as AsterLargeDetailInfo_proto from "./AsterLargeDetailInfo"

import * as AsterProgressDetailInfo_proto from "./AsterProgressDetailInfo"

export interface AsterActivityDetailInfo {
	asterLittle?: AsterLittleDetailInfo_proto.AsterLittleDetailInfo;
	asterMid?: AsterMidDetailInfo_proto.AsterMidDetailInfo;
	asterLarge?: AsterLargeDetailInfo_proto.AsterLargeDetailInfo;
	asterProgress?: AsterProgressDetailInfo_proto.AsterProgressDetailInfo;
	asterCredit?: number;
	asterToken?: number;
	isSpecialRewardTaken?: boolean;
	isContentClosed?: boolean;
	contentCloseTime?: number;
}

