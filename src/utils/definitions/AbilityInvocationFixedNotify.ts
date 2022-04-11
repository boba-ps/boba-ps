import * as AbilityInvokeEntry_proto from "./AbilityInvokeEntry"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 1149
}

export interface AbilityInvocationFixedNotify {
	invoke1St?: AbilityInvokeEntry_proto.AbilityInvokeEntry;
	invoke2Nd?: AbilityInvokeEntry_proto.AbilityInvokeEntry;
	invoke3Rd?: AbilityInvokeEntry_proto.AbilityInvokeEntry;
	invoke4Th?: AbilityInvokeEntry_proto.AbilityInvokeEntry;
	invoke5Th?: AbilityInvokeEntry_proto.AbilityInvokeEntry;
	invoke6Th?: AbilityInvokeEntry_proto.AbilityInvokeEntry;
}

