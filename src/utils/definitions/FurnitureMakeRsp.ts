import * as FurnitureMakeSlot_proto from "./FurnitureMakeSlot"

import * as FurnitureMakeHelpData_proto from "./FurnitureMakeHelpData"

import * as FurnitureMakeBeHelpedData_proto from "./FurnitureMakeBeHelpedData"

import * as FurnitureMakeMakeInfo_proto from "./FurnitureMakeMakeInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4900
}

export interface FurnitureMakeRsp {
	retcode?: number;
	furnitureMakeSlot?: FurnitureMakeSlot_proto.FurnitureMakeSlot;
	helpDataList?: FurnitureMakeHelpData_proto.FurnitureMakeHelpData[];
	helpedDataList?: FurnitureMakeBeHelpedData_proto.FurnitureMakeBeHelpedData[];
	makeInfoList?: FurnitureMakeMakeInfo_proto.FurnitureMakeMakeInfo[];
}

