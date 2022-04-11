export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4051
}

export interface SetFriendRemarkNameRsp {
	retcode?: number;
	uid?: number;
	remarkName?: string;
	isClearRemark?: boolean;
}

