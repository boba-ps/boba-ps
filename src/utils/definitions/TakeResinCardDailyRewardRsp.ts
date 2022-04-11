import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4147
}

export interface TakeResinCardDailyRewardRsp {
	retcode?: number;
	productConfigId?: number;
	itemVec?: ItemParam_proto.ItemParam[];
}

