export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4073
}

export interface GetFriendShowNameCardInfoRsp {
	retcode?: number;
	uid?: number;
	showNameCardIdList?: number[];
}

