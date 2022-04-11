export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 1,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 3347
}

export interface UnlockTransPointReq {
	sceneId?: number;
	pointId?: number;
}

