import * as BattlePassRewardTakeOption_proto from "./BattlePassRewardTakeOption"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 2624
}

export interface TakeBattlePassRewardReq {
	takeOptionList?: BattlePassRewardTakeOption_proto.BattlePassRewardTakeOption[];
}

