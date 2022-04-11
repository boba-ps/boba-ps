export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4411
}

export interface ScenePlayGuestReplyNotify {
	playId?: number;
	guestUid?: number;
	isAgree?: boolean;
}

