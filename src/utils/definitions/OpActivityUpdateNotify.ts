import * as OpActivityInfo_proto from "./OpActivityInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5184
}

export interface OpActivityUpdateNotify {
	opActivityInfo?: OpActivityInfo_proto.OpActivityInfo;
}

