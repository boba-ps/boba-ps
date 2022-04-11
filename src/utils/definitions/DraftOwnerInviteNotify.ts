export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5500
}

export interface DraftOwnerInviteNotify {
	draftId?: number;
	inviteDeadlineTime?: number;
}

