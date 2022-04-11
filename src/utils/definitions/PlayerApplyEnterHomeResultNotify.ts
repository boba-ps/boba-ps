export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4853
}

export enum Reason {
	PLAYER_JUDGE = 0,
	PLAYER_ENTER_OPTION_REFUSE = 1,
	PLAYER_ENTER_OPTION_DIRECT = 2,
	SYSTEM_JUDGE = 3,
	HOST_IN_MATCH = 4,
	PS_PLAYER_NOT_ACCEPT_OTHERS = 5,
	OPEN_STATE_NOT_OPEN = 6,
	HOST_IN_EDIT_MODE = 7,
	PRIOR_CHECK = 8
}

export interface PlayerApplyEnterHomeResultNotify {
	targetUid?: number;
	isAgreed?: boolean;
	reason?: Reason;
	targetNickname?: string;
}

