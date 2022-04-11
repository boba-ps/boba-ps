import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 616
}

export interface ReliquaryUpgradeReq {
	targetReliquaryGuid?: number;
	foodReliquaryGuidList?: number[];
	itemParamList?: ItemParam_proto.ItemParam[];
}

