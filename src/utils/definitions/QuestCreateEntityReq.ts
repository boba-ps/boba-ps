import * as CreateEntityInfo_proto from "./CreateEntityInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 479
}

export interface QuestCreateEntityReq {
	entity?: CreateEntityInfo_proto.CreateEntityInfo;
	questId?: number;
	isRewind?: boolean;
	parentQuestId?: number;
}

