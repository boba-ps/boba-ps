import * as TowerLevelStarCondData_proto from "./TowerLevelStarCondData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2492
}

export interface TowerLevelStarCondNotify {
	floorId?: number;
	levelIndex?: number;
	condDataList?: TowerLevelStarCondData_proto.TowerLevelStarCondData[];
}

