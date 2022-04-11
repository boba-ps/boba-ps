import * as ActivityScheduleInfo_proto from "./ActivityScheduleInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 2068
}

export interface ActivityScheduleInfoNotify {
	activityScheduleList?: ActivityScheduleInfo_proto.ActivityScheduleInfo[];
	remainFlySeaLampNum?: number;
}

