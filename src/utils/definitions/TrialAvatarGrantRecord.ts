export enum GrantReason {
	INVALID = 0,
	GRANT_BY_QUEST = 1,
	GRANT_BY_TRIAL_AVATAR_ACTIVITY = 2,
	GRANT_BY_DUNGEON_ELEMENT_CHALLENGE = 3,
	GRANT_BY_MIST_TRIAL_ACTIVITY = 4,
	GRANT_BY_SUMO_ACTIVITY = 5
}

export interface TrialAvatarGrantRecord {
	grantReason?: number;
	fromParentQuestId?: number;
}

