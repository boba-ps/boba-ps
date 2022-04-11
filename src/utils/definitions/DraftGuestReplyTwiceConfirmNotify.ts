export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5491
}

export interface DraftGuestReplyTwiceConfirmNotify {
	draftId?: number;
	guestUid?: number;
	isAgree?: boolean;
}

