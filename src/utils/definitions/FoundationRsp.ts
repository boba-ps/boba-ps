import * as FoundationOpType_proto from "./FoundationOpType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 814
}

export interface FoundationRsp {
	retcode?: number;
	gadgetEntityId?: number;
	opType?: FoundationOpType_proto.FoundationOpType;
	buildingId?: number;
	pointConfigId?: number;
}

