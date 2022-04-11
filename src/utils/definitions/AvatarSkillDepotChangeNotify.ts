export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1084
}

export interface AvatarSkillDepotChangeNotify {
	avatarGuid?: number;
	entityId?: number;
	skillDepotId?: number;
	talentIdList?: number[];
	proudSkillList?: number[];
	coreProudSkillLevel?: number;
	skillLevelMap?: number;
	proudSkillExtraLevelMap?: number;
}

