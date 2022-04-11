import * as Investigation_proto from "./Investigation"

import * as InvestigationTarget_proto from "./InvestigationTarget"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1927
}

export interface PlayerInvestigationAllInfoNotify {
	investigationList?: Investigation_proto.Investigation[];
	investigationTargetList?: InvestigationTarget_proto.InvestigationTarget[];
}

