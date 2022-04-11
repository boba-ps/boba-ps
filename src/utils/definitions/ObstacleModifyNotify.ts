import * as ObstacleInfo_proto from "./ObstacleInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 2389
}

export interface ObstacleModifyNotify {
	sceneId?: number;
	addObstacles?: ObstacleInfo_proto.ObstacleInfo[];
	removeObstacleIds?: number[];
}

