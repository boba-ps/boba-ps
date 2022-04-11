import * as CompoundQueueData_proto from "./CompoundQueueData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 181
}

export interface GetCompoundDataRsp {
	retcode?: number;
	unlockCompoundList?: number[];
	compoundQueDataList?: CompoundQueueData_proto.CompoundQueueData[];
}

