import * as ForgeQueueData_proto from "./ForgeQueueData"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 699
}

export interface ForgeQueueDataNotify {
	forgeQueueMap?: ForgeQueueData_proto.ForgeQueueData;
	removedForgeQueueList?: number[];
}

