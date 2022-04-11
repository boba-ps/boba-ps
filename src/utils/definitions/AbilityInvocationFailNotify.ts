import * as AbilityInvokeEntry_proto from "./AbilityInvokeEntry"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1200
}

export interface AbilityInvocationFailNotify {
	entityId?: number;
	invoke?: AbilityInvokeEntry_proto.AbilityInvokeEntry;
	reason?: string;
}

