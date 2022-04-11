import * as DailyTaskInfo_proto from "./DailyTaskInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 107
}

export interface DailyTaskProgressNotify {
	info?: DailyTaskInfo_proto.DailyTaskInfo;
}

