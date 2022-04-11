export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2824
}

export interface GetCityReputationMapInfoRsp {
	retcode?: number;
	rewardCityList?: number[];
	isNewRequest?: boolean;
	isNewHunting?: boolean;
	unlockHuntingCityList?: number[];
}

