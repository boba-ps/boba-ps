import * as Quest_proto from "./Quest"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 449
}

export interface QuestListNotify {
	questList?: Quest_proto.Quest[];
}

