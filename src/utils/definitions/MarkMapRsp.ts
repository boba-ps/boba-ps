import * as MapMarkPoint_proto from "./MapMarkPoint"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3230
}

export interface MarkMapRsp {
	retcode?: number;
	markList?: MapMarkPoint_proto.MapMarkPoint[];
}

