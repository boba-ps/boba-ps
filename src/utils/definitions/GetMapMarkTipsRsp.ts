import * as MapMarkTipsInfo_proto from "./MapMarkTipsInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3183
}

export interface GetMapMarkTipsRsp {
	retcode?: number;
	markTipsList?: MapMarkTipsInfo_proto.MapMarkTipsInfo[];
}

