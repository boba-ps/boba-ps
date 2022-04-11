import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2118
}

export interface SeaLampFlyLampNotify {
	itemId?: number;
	itemNum?: number;
	pos?: Vector_proto.Vector;
	param?: number;
}

