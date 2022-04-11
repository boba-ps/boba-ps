import * as CoopChapter_proto from "./CoopChapter"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1957
}

export interface CoopDataNotify {
	chapterList?: CoopChapter_proto.CoopChapter[];
	isHaveProgress?: boolean;
	curCoopPoint?: number;
	viewedChapterList?: number[];
}

