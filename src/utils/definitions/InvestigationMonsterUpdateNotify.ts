import * as InvestigationMonster_proto from "./InvestigationMonster"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1905
}

export interface InvestigationMonsterUpdateNotify {
	investigationMonster?: InvestigationMonster_proto.InvestigationMonster;
}

