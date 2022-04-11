import * as Achievement_proto from "./Achievement"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2653
}

export interface AchievementAllDataNotify {
	achievementList?: Achievement_proto.Achievement[];
	rewardTakenGoalIdList?: number[];
}

