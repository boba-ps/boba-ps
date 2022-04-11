import * as AsterLargeDetailInfo_proto from "./AsterLargeDetailInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2185
}

export interface AsterLargeInfoNotify {
	info?: AsterLargeDetailInfo_proto.AsterLargeDetailInfo;
}

