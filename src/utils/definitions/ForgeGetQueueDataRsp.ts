import * as ForgeQueueData_proto from "./ForgeQueueData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 671
}

export interface ForgeGetQueueDataRsp {
	retcode?: number;
	maxQueueNum?: number;
	forgeQueueMap?: ForgeQueueData_proto.ForgeQueueData;
}

