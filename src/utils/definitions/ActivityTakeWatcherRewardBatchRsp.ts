import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2066
}

export interface ActivityTakeWatcherRewardBatchRsp {
	retcode?: number;
	activityId?: number;
	watcherIdList?: number[];
	itemList?: ItemParam_proto.ItemParam[];
}

