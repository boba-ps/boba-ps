export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 200
}

export enum Reason {
	DISCONNECT = 0,
	CLIENT_REQ = 1,
	TIMEOUT = 2,
	ADMIN_REQ = 3,
	SERVER_CLOSE = 4,
	GM_CLEAR = 5,
	PLAYER_TRANSFER = 6,
	CLIENT_CHECKSUM_INVALID = 7
}

export interface PlayerLogoutReq {
	reason?: Reason;
}

