export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4747
}

export interface HomeChangeModuleRsp {
	retcode?: number;
	targetModuleId?: number;
}
