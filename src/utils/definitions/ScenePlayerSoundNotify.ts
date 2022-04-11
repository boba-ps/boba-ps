import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 269
}

export enum PlaySoundType {
	PLAY_SOUND_NONE = 0,
	PLAY_SOUND_START = 1,
	PLAY_SOUND_STOP = 2
}

export interface ScenePlayerSoundNotify {
	soundName?: string;
	playPos?: Vector_proto.Vector;
	playType?: PlaySoundType;
}

