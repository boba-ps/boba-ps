import * as Vector_proto from "./Vector"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4276
}

export interface UseWidgetCreateGadgetReq {
	materialId?: number;
	pos?: Vector_proto.Vector;
	rot?: Vector_proto.Vector;
}

