export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 3403
}

export interface SceneAudioNotify {
	sourceUid?: number;
	type?: number;
	param1?: number[];
	param2?: number[];
	param3?: string[];
}

