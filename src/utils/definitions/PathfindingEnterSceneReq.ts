import * as ObstacleInfo_proto from "./ObstacleInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 2400
}

export interface PathfindingEnterSceneReq {
	sceneId?: number;
	version?: number;
	obstacles?: ObstacleInfo_proto.ObstacleInfo[];
	isEditor?: boolean;
	activityId?: number[];
}

