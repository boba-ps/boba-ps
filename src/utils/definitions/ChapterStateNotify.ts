import * as ChapterState_proto from "./ChapterState"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 419
}

export interface NeedPlayerLevel {
	isLimit?: boolean;
	configNeedPlayerLevel?: number;
}

export interface NeedBeginTime {
	isLimit?: boolean;
	configNeedBeginTime?: number;
}

export interface ChapterStateNotify {
	chapterId?: number;
	chapterState?: ChapterState_proto.ChapterState;
	needPlayerLevel?: NeedPlayerLevel;
	needBeginTime?: NeedBeginTime;
}

