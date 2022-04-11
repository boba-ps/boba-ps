import * as SegmentCRCInfo_proto from "./SegmentCRCInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 32
}

export interface CheckSegmentCRCReq {
	infoList?: SegmentCRCInfo_proto.SegmentCRCInfo[];
}

