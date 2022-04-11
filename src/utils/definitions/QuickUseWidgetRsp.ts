import * as OneoffGatherPointDetectorData_proto from "./OneoffGatherPointDetectorData"

import * as ClientCollectorData_proto from "./ClientCollectorData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4258
}

export interface QuickUseWidgetRsp {
	retcode?: number;
	materialId?: number;
	detectorData?: OneoffGatherPointDetectorData_proto.OneoffGatherPointDetectorData;
	clientCollectorData?: ClientCollectorData_proto.ClientCollectorData;
}

