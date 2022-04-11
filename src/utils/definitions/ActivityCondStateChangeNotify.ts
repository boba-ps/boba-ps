import * as Uint32Pair_proto from "./Uint32Pair"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2166
}

export interface ActivityCondStateChangeNotify {
	scheduleId?: number;
	activityId?: number;
	meetCondList?: number[];
	expireCondList?: number[];
	activatedSaleIdList?: number[];
	disableTransferPointInteractionList?: Uint32Pair_proto.Uint32Pair[];
}

