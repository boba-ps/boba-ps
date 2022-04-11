import * as ReunionWatcherInfo_proto from "./ReunionWatcherInfo"

export interface ReunionMissionInfo {
	missionId?: number;
	curDayWatcherList?: ReunionWatcherInfo_proto.ReunionWatcherInfo[];
	curScore?: number;
	isFinished?: boolean;
	isTakenReward?: boolean;
	nextRefreshTime?: number;
	isTakenRewardList?: boolean[];
	watcherList?: ReunionWatcherInfo_proto.ReunionWatcherInfo[];
}

