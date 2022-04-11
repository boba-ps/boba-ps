import * as ActivityInfo_proto from "./ActivityInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 2177
}

export interface ActivityInfoNotify {
	activityInfo?: ActivityInfo_proto.ActivityInfo;
}

