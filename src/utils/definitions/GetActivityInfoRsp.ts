import * as ActivityInfo_proto from "./ActivityInfo"

import * as Uint32Pair_proto from "./Uint32Pair"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2011
}

export interface GetActivityInfoRsp {
	retcode?: number;
	activityInfoList?: ActivityInfo_proto.ActivityInfo[];
	activatedSaleIdList?: number[];
	disableTransferPointInteractionList?: Uint32Pair_proto.Uint32Pair[];
}

