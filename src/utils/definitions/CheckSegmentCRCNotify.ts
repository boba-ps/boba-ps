import * as SegmentInfo_proto from "./SegmentInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 70
}

export interface CheckSegmentCRCNotify {
	infoList?: SegmentInfo_proto.SegmentInfo[];
}

