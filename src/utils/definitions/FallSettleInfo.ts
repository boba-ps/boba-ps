import * as OnlinePlayerInfo_proto from "./OnlinePlayerInfo"

export interface FallSettleInfo {
	uid?: number;
	catchCount?: number;
	flowerRingCatchCountMap?: number;
	finalScore?: number;
	playerInfo?: OnlinePlayerInfo_proto.OnlinePlayerInfo;
	remainTime?: number;
}

