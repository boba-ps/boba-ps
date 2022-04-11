import * as ParentQuest_proto from "./ParentQuest"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 500
}

export interface FinishedParentQuestUpdateNotify {
	parentQuestList?: ParentQuest_proto.ParentQuest[];
}

