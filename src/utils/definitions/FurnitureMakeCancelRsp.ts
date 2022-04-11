import * as FurnitureMakeSlot_proto from "./FurnitureMakeSlot"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4681
}

export interface FurnitureMakeCancelRsp {
	retcode?: number;
	makeId?: number;
	furnitureMakeSlot?: FurnitureMakeSlot_proto.FurnitureMakeSlot;
}

