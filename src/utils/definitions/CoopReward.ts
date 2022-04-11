export enum State {
	UNLOCK = 0,
	LOCK = 1,
	TAKEN = 2
}

export interface CoopReward {
	id?: number;
	state?: State;
}

