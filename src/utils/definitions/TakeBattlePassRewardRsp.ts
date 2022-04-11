import * as BattlePassRewardTakeOption_proto from "./BattlePassRewardTakeOption"

import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2632
}

export interface TakeBattlePassRewardRsp {
	retcode?: number;
	takeOptionList?: BattlePassRewardTakeOption_proto.BattlePassRewardTakeOption[];
	itemList?: ItemParam_proto.ItemParam[];
}

