export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8625
}

export interface RogueSwitchAvatarRsp {
	retcode?: number;
	dungeonId?: number;
	cellId?: number;
	onstageAvatarGuidList?: number[];
	curAvatarGuid?: number;
	backstageAvatarGuidList?: number[];
}

