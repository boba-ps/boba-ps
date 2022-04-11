import * as MapAreaInfo_proto from "./MapAreaInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3180
}

export interface MapAreaChangeNotify {
	mapAreaInfoList?: MapAreaInfo_proto.MapAreaInfo[];
}

