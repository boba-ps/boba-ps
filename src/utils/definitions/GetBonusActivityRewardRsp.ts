import * as BonusActivityInfo_proto from "./BonusActivityInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2519
}

export interface GetBonusActivityRewardRsp {
	retcode?: number;
	bonusActivityInfoList?: BonusActivityInfo_proto.BonusActivityInfo;
}

