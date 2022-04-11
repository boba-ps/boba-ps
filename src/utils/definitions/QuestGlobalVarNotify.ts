import * as QuestGlobalVar_proto from "./QuestGlobalVar"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 417
}

export interface QuestGlobalVarNotify {
	varList?: QuestGlobalVar_proto.QuestGlobalVar[];
}

