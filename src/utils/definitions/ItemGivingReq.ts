import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 187
}

export interface ItemGivingReq {
	givingId?: number;
	itemParamList?: ItemParam_proto.ItemParam[];
	itemGuidCountMap?: number;
}

