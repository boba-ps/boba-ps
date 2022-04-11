import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 247
}

export enum Type {
	NULL = 0,
	ACTIVE = 1,
	PASSIVE = 2
}

export interface EntityJumpNotify {
	entityId?: number;
	jumpType?: Type;
	pos?: Vector_proto.Vector;
	rot?: Vector_proto.Vector;
}

