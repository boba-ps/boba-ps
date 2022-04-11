export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1461
}

export interface GetAuthkeyRsp {
	retcode?: number;
	authkey?: string;
	authAppid?: string;
	signType?: number;
	authkeyVer?: number;
	gameBiz?: string;
}

