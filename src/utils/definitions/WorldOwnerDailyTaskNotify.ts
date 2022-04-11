import * as DailyTaskInfo_proto from "./DailyTaskInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 166
}

export interface WorldOwnerDailyTaskNotify {
	taskList?: DailyTaskInfo_proto.DailyTaskInfo[];
	filterCityId?: number;
}

