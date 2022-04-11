import * as StoreType_proto from "./StoreType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 684
}

export interface StoreItemDelNotify {
	storeType?: StoreType_proto.StoreType;
	guidList?: number[];
}

