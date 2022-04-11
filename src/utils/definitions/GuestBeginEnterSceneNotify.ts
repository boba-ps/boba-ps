export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3317
}

export interface GuestBeginEnterSceneNotify {
	uid?: number;
	sceneId?: number;
}

