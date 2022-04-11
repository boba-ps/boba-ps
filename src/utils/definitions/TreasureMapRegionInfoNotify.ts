import * as TreasureMapRegionInfo_proto from "./TreasureMapRegionInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2039
}

export interface TreasureMapRegionInfoNotify {
	regionInfo?: TreasureMapRegionInfo_proto.TreasureMapRegionInfo;
}

