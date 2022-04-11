import * as OpActivityInfo_proto from "./OpActivityInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5118
}

export interface GetOpActivityInfoRsp {
	retcode?: number;
	opActivityInfoList?: OpActivityInfo_proto.OpActivityInfo[];
}

