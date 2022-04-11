export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1972
}

export interface SaveCoopDialogRsp {
	retcode?: number;
	mainCoopId?: number;
	dialogId?: number;
}

