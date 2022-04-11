import * as BonusActivityInfo_proto from "./BonusActivityInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2526
}

export interface BonusActivityUpdateNotify {
	bonusActivityInfoList?: BonusActivityInfo_proto.BonusActivityInfo[];
}

