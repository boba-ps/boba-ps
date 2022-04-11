export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 215
}

export interface ScenePointUnlockNotify {
	sceneId?: number;
	pointList?: number[];
	lockedPointList?: number[];
	hidePointList?: number[];
	unhidePointList?: number[];
}

