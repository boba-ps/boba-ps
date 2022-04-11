import * as GadgetGeneralRewardInfo_proto from "./GadgetGeneralRewardInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 824
}

export interface GadgetGeneralRewardInfoNotify {
	entityId?: number;
	generalRewardInfo?: GadgetGeneralRewardInfo_proto.GadgetGeneralRewardInfo;
}

