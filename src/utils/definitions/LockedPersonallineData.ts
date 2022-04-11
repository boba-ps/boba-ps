export enum LockReason {
	LEVEL = 0,
	QUEST = 1
}

export interface LockedPersonallineData {
	chapterId?: number;
	level?: number;
	personalLineId?: number;
	lockReason?: LockReason;
}

