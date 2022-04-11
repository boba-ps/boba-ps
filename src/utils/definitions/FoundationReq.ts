import * as FoundationOpType_proto from "./FoundationOpType"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 819
}

export interface FoundationReq {
	gadgetEntityId?: number;
	opType?: FoundationOpType_proto.FoundationOpType;
	buildingId?: number;
	pointConfigId?: number;
}

