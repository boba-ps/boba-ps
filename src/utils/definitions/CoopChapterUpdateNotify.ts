import * as CoopChapter_proto from "./CoopChapter"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1965
}

export interface CoopChapterUpdateNotify {
	chapterList?: CoopChapter_proto.CoopChapter[];
}

