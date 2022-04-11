import * as FurnitureMakeSlot_proto from "./FurnitureMakeSlot"

import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4824
}

export interface TakeFurnitureMakeRsp {
	retcode?: number;
	makeId?: number;
	furnitureMakeSlot?: FurnitureMakeSlot_proto.FurnitureMakeSlot;
	outputItemList?: ItemParam_proto.ItemParam[];
	returnItemList?: ItemParam_proto.ItemParam[];
}

