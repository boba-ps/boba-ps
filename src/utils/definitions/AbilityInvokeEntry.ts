import * as AbilityInvokeEntryHead_proto from "./AbilityInvokeEntryHead"

import * as AbilityInvokeArgument_proto from "./AbilityInvokeArgument"

import * as ForwardType_proto from "./ForwardType"

export interface AbilityInvokeEntry {
	head?: AbilityInvokeEntryHead_proto.AbilityInvokeEntryHead;
	argumentType?: AbilityInvokeArgument_proto.AbilityInvokeArgument;
	abilityData?: Buffer;
	entityId?: number;
	forwardType?: ForwardType_proto.ForwardType;
	forwardPeer?: number;
	eventId?: number;
	totalTickTime?: number;
}

