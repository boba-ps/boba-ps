import * as ClientCollectorData_proto from "./ClientCollectorData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4280
}

export interface ClientCollectorDataNotify {
	clientCollectorDataList?: ClientCollectorData_proto.ClientCollectorData[];
}

