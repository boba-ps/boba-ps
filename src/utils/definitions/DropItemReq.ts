import * as StoreType_proto from "./StoreType"

import * as Vector_proto from "./Vector"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 679
}

export interface DropItemReq {
	storeType?: StoreType_proto.StoreType;
	guid?: number;
	count?: number;
	pos?: Vector_proto.Vector;
}

