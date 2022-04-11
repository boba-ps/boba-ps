import * as CodexType_proto from "./CodexType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4205
}

export interface CodexDataUpdateNotify {
	type?: CodexType_proto.CodexType;
	id?: number;
	weaponMaxPromoteLevel?: number;
}

