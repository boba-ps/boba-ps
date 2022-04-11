import * as FurnitureMakeBeHelpedData_proto from "./FurnitureMakeBeHelpedData"

import * as FurnitureMakeSlot_proto from "./FurnitureMakeSlot"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4851
}

export interface FurnitureMakeBeHelpedNotify {
	furnitureMakeHelpedData?: FurnitureMakeBeHelpedData_proto.FurnitureMakeBeHelpedData;
	furnitureMakeSlot?: FurnitureMakeSlot_proto.FurnitureMakeSlot;
}

