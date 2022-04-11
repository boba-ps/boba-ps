export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4460
}

export enum Reason {
	INVALID = 0,
	ENTER = 1,
	LEAVE = 2
}

export interface OtherPlayerEnterHomeNotify {
	nickname?: string;
	reason?: Reason;
}

