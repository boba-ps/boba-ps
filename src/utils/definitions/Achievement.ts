export enum Status {
	INVALID = 0,
	UNFINISHED = 1,
	FINISHED = 2,
	REWARD_TAKEN = 3
}

export interface Achievement {
	id?: number;
	status?: Status;
	curProgress?: number;
	totalProgress?: number;
	finishTimestamp?: number;
}

