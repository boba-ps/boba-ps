export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4392
}

export interface ScenePlayGuestReplyInviteRsp {
	retcode?: number;
	playId?: number;
	isAgree?: boolean;
}

