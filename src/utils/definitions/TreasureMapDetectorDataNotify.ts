import * as TreasureMapDetectorData_proto from "./TreasureMapDetectorData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4275
}

export interface TreasureMapDetectorDataNotify {
	data?: TreasureMapDetectorData_proto.TreasureMapDetectorData;
}

