export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4082
}

export interface FriendInfoChangeNotify {
	uid?: number;
	onlineId?: string;
}

