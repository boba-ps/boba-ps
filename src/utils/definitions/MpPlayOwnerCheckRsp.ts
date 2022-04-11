export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1838
}

export interface MpPlayOwnerCheckRsp {
	retcode?: number;
	mpPlayId?: number;
	wrongUid?: number;
	isSkipMatch?: boolean;
}

