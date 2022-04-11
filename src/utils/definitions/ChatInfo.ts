export enum SystemHintType {
	CHAT_NONE = 0,
	CHAT_ENTER_WORLD = 1,
	CHAT_LEAVE_WORLD = 2
}

export interface SystemHint {
	type?: number;
}

export interface ChatInfo {
	text?: string;
	icon?: number;
	systemHint?: SystemHint;
	time?: number;
	uid?: number;
	sequence?: number;
	toUid?: number;
	isRead?: boolean;
}

