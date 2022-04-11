import * as FindHilichurlDayContentInfo_proto from "./FindHilichurlDayContentInfo"

export interface FindHilichurlDetailInfo {
	dayIndex?: number;
	playerDayIndex?: number;
	dayContentInfoList?: FindHilichurlDayContentInfo_proto.FindHilichurlDayContentInfo[];
	isContentClosed?: boolean;
	contentCloseTime?: number;
	minOpenPlayerLevel?: number;
	isEndQuestAccept?: boolean;
}

