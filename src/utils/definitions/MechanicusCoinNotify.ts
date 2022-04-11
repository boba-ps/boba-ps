export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3984
}

export interface MechanicusCoinNotify {
	mechanicusId?: number;
	coin?: number;
}

