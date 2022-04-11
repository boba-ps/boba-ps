import * as ResVersionConfig_proto from "./ResVersionConfig"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 190
}

export interface GetNextResourceInfoRsp {
	retcode?: number;
	nextResVersionConfig?: ResVersionConfig_proto.ResVersionConfig;
	nextResourceUrl?: string;
}

