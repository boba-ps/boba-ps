import * as DragonSpineChapterInfo_proto from "./DragonSpineChapterInfo"

export interface DragonSpineActivityDetailInfo {
	chapterInfoList?: DragonSpineChapterInfo_proto.DragonSpineChapterInfo[];
	weaponEnhanceLevel?: number;
	shimmeringEssence?: number;
	warmEssence?: number;
	wondrousEssence?: number;
	isContentClosed?: boolean;
	contentFinishTime?: number;
}

