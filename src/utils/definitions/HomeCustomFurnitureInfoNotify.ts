import * as HomeCustomFurnitureInfo_proto from "./HomeCustomFurnitureInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4877
}

export interface HomeCustomFurnitureInfoNotify {
	customFurnitureInfoList?: HomeCustomFurnitureInfo_proto.HomeCustomFurnitureInfo[];
	usedSubFurnitureCountMap?: number;
	deleteCustomFurnitureList?: number[];
}

