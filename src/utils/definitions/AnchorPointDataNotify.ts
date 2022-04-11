import * as AnchorPointData_proto from "./AnchorPointData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4253
}

export interface AnchorPointDataNotify {
	anchorPointList?: AnchorPointData_proto.AnchorPointData[];
	nextUsableTime?: number;
}

