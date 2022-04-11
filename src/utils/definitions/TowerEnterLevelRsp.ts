export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2426
}

export interface TowerEnterLevelRsp {
	retcode?: number;
	floorId?: number;
	levelIndex?: number;
	towerBuffIdList?: number[];
}

