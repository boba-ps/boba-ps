export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1805
}

export enum Reason {
	PLAYER_JUDGE = 0,
	SCENE_CANNOT_ENTER = 1,
	PLAYER_CANNOT_ENTER_MP = 2,
	SYSTEM_JUDGE = 3,
	ALLOW_ENTER_PLAYER_FULL = 4,
	WORLD_LEVEL_LOWER_THAN_HOST = 5,
	HOST_IN_MATCH = 6,
	PLAYER_IN_BLACKLIST = 7,
	PS_PLAYER_NOT_ACCEPT_OTHERS = 8,
	HOST_IS_BLOCKED = 9,
	OTHER_DATA_VERSION_NOT_LATEST = 10,
	DATA_VERSION_NOT_LATEST = 11,
	PLAYER_NOT_IN_PLAYER_WORLD = 12,
	MAX_PLAYER = 13
}

export interface PlayerApplyEnterMpResultNotify {
	targetUid?: number;
	isAgreed?: boolean;
	reason?: Reason;
	targetNickname?: string;
}

