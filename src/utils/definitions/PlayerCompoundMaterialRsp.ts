import * as CompoundQueueData_proto from "./CompoundQueueData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 155
}

export interface PlayerCompoundMaterialRsp {
	retcode?: number;
	compoundQueData?: CompoundQueueData_proto.CompoundQueueData;
}

