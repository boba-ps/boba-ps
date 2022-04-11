export enum Status {
	INVALID = 0,
	RUNNING = 1,
	FINISHED = 2
}

export interface MainCoop {
	id?: number;
	status?: Status;
	savePointIdList?: number[];
	selfConfidence?: number;
	normalVarMap?: number;
	tempVarMap?: number;
	seenEndingMap?: number;
}

