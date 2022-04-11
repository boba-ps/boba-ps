import * as Achievement_proto from "./Achievement"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2693
}

export interface AchievementUpdateNotify {
	achievementList?: Achievement_proto.Achievement[];
}

