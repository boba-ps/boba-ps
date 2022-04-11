import * as CoopPoint_proto from "./CoopPoint"

import * as CoopReward_proto from "./CoopReward"

import * as CoopCg_proto from "./CoopCg"

export enum State {
	CLOSE = 0,
	COND_NOT_MEET = 1,
	COND_MEET = 2,
	ACCEPT = 3
}

export interface CoopChapter {
	id?: number;
	state?: State;
	lockReasonList?: number[];
	coopPointList?: CoopPoint_proto.CoopPoint[];
	coopRewardList?: CoopReward_proto.CoopReward[];
	coopCgList?: CoopCg_proto.CoopCg[];
	totalEndCount?: number;
	finishedEndCount?: number;
	seenEndingMap?: number;
	finishDialogList?: number[];
}

