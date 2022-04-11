import * as PropValue_proto from "./PropValue"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 126
}

export interface PlayerPropNotify {
	propMap?: PropValue_proto.PropValue;
}

