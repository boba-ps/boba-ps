export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 1824
}

export interface PlayerApplyEnterMpResultReq {
	applyUid?: number;
	isAgreed?: boolean;
}

