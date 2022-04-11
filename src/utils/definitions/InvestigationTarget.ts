export enum State {
	INVALID = 0,
	IN_PROGRESS = 1,
	COMPLETE = 2,
	REWARD_TAKEN = 3
}

export interface InvestigationTarget {
	questId?: number;
	investigationId?: number;
	state?: State;
	progress?: number;
	totalProgress?: number;
}

