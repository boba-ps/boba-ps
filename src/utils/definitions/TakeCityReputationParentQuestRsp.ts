import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 2894
}

export interface TakeCityReputationParentQuestRsp {
	retcode?: number;
	cityId?: number;
	parentQuestList?: number[];
	itemList?: ItemParam_proto.ItemParam[];
}

