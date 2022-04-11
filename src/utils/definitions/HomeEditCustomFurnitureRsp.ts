import * as HomeCustomFurnitureInfo_proto from "./HomeCustomFurnitureInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4761
}

export interface HomeEditCustomFurnitureRsp {
	retcode?: number;
	customFurnitureInfo?: HomeCustomFurnitureInfo_proto.HomeCustomFurnitureInfo;
}

