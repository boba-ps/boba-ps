import * as EntityMoveInfo_proto from "./EntityMoveInfo"

export enum CmdId {
	ENET_IS_RELIABLE = 0,
	NONE = 0,
	ENET_CHANNEL_ID = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 225
}

export interface SceneEntitiesMovesReq {
	entityMoveInfoList?: EntityMoveInfo_proto.EntityMoveInfo[];
}

