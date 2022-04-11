export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4105
}

export interface CardProductRewardNotify {
	productId?: string;
	hcoin?: number;
	remainDays?: number;
}

