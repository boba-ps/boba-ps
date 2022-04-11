import * as ObstacleInfo_proto from "./ObstacleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2373
}

export interface GMShowObstacleRsp {
	retcode?: number;
	obstacles?: ObstacleInfo_proto.ObstacleInfo[];
}

