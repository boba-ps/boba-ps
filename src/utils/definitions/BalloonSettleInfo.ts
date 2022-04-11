import * as OnlinePlayerInfo_proto from "./OnlinePlayerInfo"

export interface BalloonSettleInfo {
	uid?: number;
	shootCount?: number;
	maxCombo?: number;
	finalScore?: number;
	playerInfo?: OnlinePlayerInfo_proto.OnlinePlayerInfo;
}

