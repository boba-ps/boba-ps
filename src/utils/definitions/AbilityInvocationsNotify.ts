import * as AbilityInvokeEntry_proto from "./AbilityInvokeEntry"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 1118
}

export interface AbilityInvocationsNotify {
	invokes?: AbilityInvokeEntry_proto.AbilityInvokeEntry[];
}

