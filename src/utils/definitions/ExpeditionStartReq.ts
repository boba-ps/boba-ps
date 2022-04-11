export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 2105
}

export interface ExpeditionStartReq {
	pathId?: number;
	avatarIdList?: number[];
	assistUid?: number;
	assistAvatarId?: number;
}

