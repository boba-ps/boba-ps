export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 606
}

export interface WeaponPromoteRsp {
	retcode?: number;
	targetWeaponGuid?: number;
	oldPromoteLevel?: number;
	curPromoteLevel?: number;
}
