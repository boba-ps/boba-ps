export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4210
}

export interface QueryCodexMonsterBeKilledNumRsp {
	retcode?: number;
	codexIdList?: number[];
	beKilledNumList?: number[];
}

