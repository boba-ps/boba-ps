export enum State {
	UNSTARTED = 0,
	STARTED = 1,
	FINISHED = 2
}

export interface CoopPoint {
	id?: number;
	state?: State;
	selfConfidence?: number;
}

