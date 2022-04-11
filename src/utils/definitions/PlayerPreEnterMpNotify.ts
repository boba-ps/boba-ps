export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1815
}

export enum State {
	INVALID = 0,
	START = 1,
	TIMEOUT = 2
}

export interface PlayerPreEnterMpNotify {
	uid?: number;
	state?: State;
	nickname?: string;
}

