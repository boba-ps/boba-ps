import * as MainCoop_proto from "./MainCoop"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1953
}

export interface AllCoopInfoNotify {
	mainCoopList?: MainCoop_proto.MainCoop[];
}

