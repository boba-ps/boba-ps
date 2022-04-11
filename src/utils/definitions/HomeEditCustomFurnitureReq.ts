import * as HomeCustomFurnitureInfo_proto from "./HomeCustomFurnitureInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4754
}

export interface HomeEditCustomFurnitureReq {
	customFurnitureInfo?: HomeCustomFurnitureInfo_proto.HomeCustomFurnitureInfo;
}

