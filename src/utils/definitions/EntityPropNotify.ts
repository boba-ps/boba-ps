import * as PropValue_proto from "./PropValue"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1249
}

export interface EntityPropNotify {
	entityId?: number;
	propMap?: PropValue_proto.PropValue;
}

