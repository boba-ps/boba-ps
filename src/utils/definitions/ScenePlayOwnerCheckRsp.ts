export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4439
}

export interface ScenePlayOwnerCheckRsp {
	retcode?: number;
	playId?: number;
	isSkipMatch?: boolean;
	wrongUid?: number;
	paramList?: number[];
}

