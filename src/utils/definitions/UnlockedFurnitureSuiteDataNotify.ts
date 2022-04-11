export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4567
}

export interface UnlockedFurnitureSuiteDataNotify {
	isAll?: boolean;
	furnitureSuiteIdList?: number[];
}

