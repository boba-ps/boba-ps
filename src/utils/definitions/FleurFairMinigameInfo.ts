import * as FleurFairBalloonInfo_proto from "./FleurFairBalloonInfo"

import * as FleurFairFallInfo_proto from "./FleurFairFallInfo"

import * as FleurFairMusicGameInfo_proto from "./FleurFairMusicGameInfo"

export interface FleurFairMinigameInfo {
	balloonInfo?: FleurFairBalloonInfo_proto.FleurFairBalloonInfo;
	fallInfo?: FleurFairFallInfo_proto.FleurFairFallInfo;
	musicInfo?: FleurFairMusicGameInfo_proto.FleurFairMusicGameInfo;
	minigameId?: number;
	openTime?: number;
	isOpen?: boolean;
}

