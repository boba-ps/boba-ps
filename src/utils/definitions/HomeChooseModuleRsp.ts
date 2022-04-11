export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4653
}

export interface HomeChooseModuleRsp {
	retcode?: number;
	moduleId?: number;
}

