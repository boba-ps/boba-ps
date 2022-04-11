import * as OneoffGatherPointDetectorData_proto from "./OneoffGatherPointDetectorData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4288
}

export interface OneoffGatherPointDetectorDataNotify {
	oneoffGatherPointDetectorDataList?: OneoffGatherPointDetectorData_proto.OneoffGatherPointDetectorData[];
}

