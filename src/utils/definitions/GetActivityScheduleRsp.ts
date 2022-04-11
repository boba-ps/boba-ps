import * as ActivityScheduleInfo_proto from "./ActivityScheduleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2187
}

export interface GetActivityScheduleRsp {
	retcode?: number;
	activityScheduleList?: ActivityScheduleInfo_proto.ActivityScheduleInfo[];
	remainFlySeaLampNum?: number;
}

