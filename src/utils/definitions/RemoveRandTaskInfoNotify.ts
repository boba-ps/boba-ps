export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 134
}

export enum FinishReason {
	DEFAULT = 0,
	CLEAR = 1,
	DISTANCE = 2,
	FINISH = 3
}

export interface RemoveRandTaskInfoNotify {
	randTaskId?: number;
	isSucc?: boolean;
	reason?: FinishReason;
}

