export interface SignInInfo {
	scheduleId?: number;
	configId?: number;
	beginTime?: number;
	endTime?: number;
	isCondSatisfied?: boolean;
	signInCount?: number;
	lastSignInTime?: number;
	rewardDayList?: number[];
}

