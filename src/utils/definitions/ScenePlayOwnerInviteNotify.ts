export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4351
}

export interface ScenePlayOwnerInviteNotify {
	playId?: number;
	inviteCd?: number;
	isRemainReward?: boolean;
}

