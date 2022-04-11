import * as DigMarkPoint_proto from "./DigMarkPoint"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8895
}

export interface DigActivityMarkPointChangeNotify {
	digMarkPointList?: DigMarkPoint_proto.DigMarkPoint[];
}

