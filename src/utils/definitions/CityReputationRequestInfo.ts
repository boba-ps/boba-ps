export interface RequestInfo {
	requestId?: number;
	questId?: number;
	isTakenReward?: boolean;
}

export interface CityReputationRequestInfo {
	isOpen?: boolean;
	requestInfoList?: RequestInfo[];
}

