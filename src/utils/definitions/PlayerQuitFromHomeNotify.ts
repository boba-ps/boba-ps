export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4801
}

export enum QuitReason {
	INVALID = 0,
	KICK_BY_HOST = 1,
	BACK_TO_MY_WORLD = 2,
	HOME_BLOCKED = 3,
	HOME_IN_EDIT_MODE = 4,
	BY_MUIP = 5,
	CUR_MODULE_CLOSED = 6
}

export interface PlayerQuitFromHomeNotify {
	reason?: QuitReason;
}

