import * as EntityMoveInfo_proto from "./EntityMoveInfo"

export enum CmdId {
	NONE = 0,
	ENET_IS_RELIABLE = 0,
	ENET_CHANNEL_ID = 1,
	CMD_ID = 3097
}

export interface SceneEntitiesMoveCombineNotify {
	entityMoveInfoList?: EntityMoveInfo_proto.EntityMoveInfo[];
}

