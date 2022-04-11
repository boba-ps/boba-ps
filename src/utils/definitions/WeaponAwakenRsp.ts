export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 692
}

export interface WeaponAwakenRsp {
	retcode?: number;
	targetWeaponGuid?: number;
	targetWeaponAwakenLevel?: number;
	oldAffixLevelMap?: number;
	curAffixLevelMap?: number;
	avatarGuid?: number;
}

