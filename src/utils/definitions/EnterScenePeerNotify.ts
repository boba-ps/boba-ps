export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 223
}

export interface EnterScenePeerNotify {
	destSceneId?: number;
	peerId?: number;
	hostPeerId?: number;
	enterSceneToken?: number;
}

