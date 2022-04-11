import * as Investigation_proto from "./Investigation"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1914
}

export interface PlayerInvestigationNotify {
	investigationList?: Investigation_proto.Investigation[];
}

