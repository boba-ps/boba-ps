export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 147
}

export interface SetPlayerNameRsp {
	retcode?: number;
	nickName?: string;
}

