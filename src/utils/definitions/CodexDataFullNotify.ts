import * as CodexTypeData_proto from "./CodexTypeData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4208
}

export interface CodexDataFullNotify {
	typeDataList?: CodexTypeData_proto.CodexTypeData[];
}

