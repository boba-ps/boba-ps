import * as ActivityWatcherInfo_proto from "./ActivityWatcherInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 2099
}

export interface ActivityUpdateWatcherNotify {
	activityId?: number;
	watcherInfo?: ActivityWatcherInfo_proto.ActivityWatcherInfo;
}

