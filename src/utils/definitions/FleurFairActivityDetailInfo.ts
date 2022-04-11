import * as FleurFairChapterInfo_proto from "./FleurFairChapterInfo"

import * as FleurFairMinigameInfo_proto from "./FleurFairMinigameInfo"

import * as FleurFairDungeonSectionInfo_proto from "./FleurFairDungeonSectionInfo"

export interface FleurFairActivityDetailInfo {
	chapterInfoList?: FleurFairChapterInfo_proto.FleurFairChapterInfo[];
	isContentClosed?: boolean;
	contentCloseTime?: number;
	minigameInfoMap?: FleurFairMinigameInfo_proto.FleurFairMinigameInfo;
	dungeonSectionInfoMap?: FleurFairDungeonSectionInfo_proto.FleurFairDungeonSectionInfo;
	isDungeonUnlocked?: boolean;
	dungeonPunishOverTime?: number;
	obtainedToken?: number;
}

