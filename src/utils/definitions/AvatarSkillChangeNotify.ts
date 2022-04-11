export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1091
}

export interface AvatarSkillChangeNotify {
	avatarGuid?: number;
	entityId?: number;
	skillDepotId?: number;
	avatarSkillId?: number;
	oldLevel?: number;
	curLevel?: number;
}

