export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 696
}

export interface ReliquaryUpgradeRsp {
	retcode?: number;
	targetReliquaryGuid?: number;
	oldLevel?: number;
	curLevel?: number;
	powerUpRate?: number;
	oldAppendPropList?: number[];
	curAppendPropList?: number[];
}

