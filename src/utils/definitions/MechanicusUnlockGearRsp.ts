export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3942
}

export interface MechanicusUnlockGearRsp {
	retcode?: number;
	mechanicusId?: number;
	gearId?: number;
}

