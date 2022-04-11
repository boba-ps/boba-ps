export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8734
}

export interface HideAndSeekSelectSkillRsp {
	retcode?: number;
	skillList?: number[];
}

