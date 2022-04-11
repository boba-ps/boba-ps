import * as PropValue_proto from "./PropValue"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 3219
}

export enum DataType {
	DATA_NONE = 0,
	WORLD_LEVEL = 1,
	IS_IN_MP_MODE = 2
}

export interface WorldDataNotify {
	worldPropMap?: PropValue_proto.PropValue;
}

