export interface CountDownDelete {
	deleteTimeNumMap?: number;
	configCountDownTime?: number;
}

export interface DateTimeDelete {
	deleteTime?: number;
}

export interface DelayWeekCountDownDelete {
	deleteTimeNumMap?: number;
	configDelayWeek?: number;
	configCountDownTime?: number;
}

export interface MaterialDeleteInfo {
	countDownDelete?: CountDownDelete;
	dateDelete?: DateTimeDelete;
	delayWeekCountDownDelete?: DelayWeekCountDownDelete;
	hasDeleteConfig?: boolean;
}

