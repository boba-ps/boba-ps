import * as ExclusiveRuleInfo_proto from "./ExclusiveRuleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 167
}

export interface ExclusiveRuleNotify {
	ruleInfoList?: ExclusiveRuleInfo_proto.ExclusiveRuleInfo[];
}

