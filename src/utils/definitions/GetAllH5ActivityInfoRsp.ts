import * as H5ActivityInfo_proto from "./H5ActivityInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5653
}

export interface GetAllH5ActivityInfoRsp {
	retcode?: number;
	h5ActivityInfoList?: H5ActivityInfo_proto.H5ActivityInfo[];
	clientRedDotTimestamp?: number;
}

