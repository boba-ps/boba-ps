import * as FoundationInfo_proto from "./FoundationInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 815
}

export interface FoundationNotify {
	gadgetEntityId?: number;
	info?: FoundationInfo_proto.FoundationInfo;
}

