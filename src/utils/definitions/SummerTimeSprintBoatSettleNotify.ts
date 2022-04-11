export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8956
}

export interface SummerTimeSprintBoatSettleNotify {
	isSuccess?: boolean;
	leftTime?: number;
	collectNum?: number;
	totalNum?: number;
	score?: number;
	isNewRecord?: boolean;
	medalLevel?: number;
	groupId?: number;
}

