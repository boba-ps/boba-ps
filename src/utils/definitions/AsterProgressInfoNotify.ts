import * as AsterProgressDetailInfo_proto from "./AsterProgressDetailInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2095
}

export interface AsterProgressInfoNotify {
	info?: AsterProgressDetailInfo_proto.AsterProgressDetailInfo;
}

