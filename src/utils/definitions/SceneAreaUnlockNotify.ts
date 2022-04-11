export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 296
}

export interface SceneAreaUnlockNotify {
	sceneId?: number;
	areaList?: number[];
}

