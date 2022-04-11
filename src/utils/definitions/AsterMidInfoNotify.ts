import * as AsterMidDetailInfo_proto from "./AsterMidDetailInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2111
}

export interface AsterMidInfoNotify {
	info?: AsterMidDetailInfo_proto.AsterMidDetailInfo;
}

