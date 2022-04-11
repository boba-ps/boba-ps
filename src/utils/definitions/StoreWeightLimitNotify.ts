import * as StoreType_proto from "./StoreType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 618
}

export interface StoreWeightLimitNotify {
	storeType?: StoreType_proto.StoreType;
	weightLimit?: number;
	materialCountLimit?: number;
	weaponCountLimit?: number;
	reliquaryCountLimit?: number;
	furnitureCountLimit?: number;
}

