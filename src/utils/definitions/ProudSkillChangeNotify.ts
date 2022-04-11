export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1012
}

export interface ProudSkillChangeNotify {
	avatarGuid?: number;
	entityId?: number;
	skillDepotId?: number;
	proudSkillList?: number[];
}

