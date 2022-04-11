export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 676
}

export interface ReliquaryPromoteRsp {
	retcode?: number;
	targetReliquaryGuid?: number;
	oldPromoteLevel?: number;
	curPromoteLevel?: number;
	oldAppendPropList?: number[];
	curAppendPropList?: number[];
}

