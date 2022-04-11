import * as EntityMoveFailInfo_proto from "./EntityMoveFailInfo"

export enum CmdId {
	NONE = 0,
	ENET_IS_RELIABLE = 0,
	ENET_CHANNEL_ID = 1,
	CMD_ID = 233
}

export interface SceneEntitiesMovesRsp {
	entityMoveFailInfoList?: EntityMoveFailInfo_proto.EntityMoveFailInfo[];
}

