export enum State {
	INVALID = 0,
	IN_PROGRESS = 1,
	COMPLETE = 2,
	REWARD_TAKEN = 3
}

export interface Investigation {
	id?: number;
	progress?: number;
	totalProgress?: number;
	state?: State;
}

