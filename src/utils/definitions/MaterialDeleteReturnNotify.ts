import * as MaterialDeleteReturnType_proto from "./MaterialDeleteReturnType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 634
}

export interface MaterialDeleteReturnNotify {
	deleteMaterialMap?: number;
	returnItemMap?: number;
	type?: MaterialDeleteReturnType_proto.MaterialDeleteReturnType;
}

