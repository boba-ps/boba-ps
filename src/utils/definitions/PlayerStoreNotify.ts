import * as StoreType_proto from "./StoreType"

import * as Item_proto from "./Item"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 649
}

export interface PlayerStoreNotify {
	storeType?: StoreType_proto.StoreType;
	itemList?: Item_proto.Item[];
	weightLimit?: number;
}

