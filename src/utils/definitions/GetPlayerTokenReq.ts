export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 149
}

export interface GetPlayerTokenReq {
	accountType?: number;
	accountUid?: string;
	accountToken?: string;
	accountExt?: string;
	uid?: number;
	isGuest?: boolean;
	platformType?: number;
	cloudClientIp?: number;
	onlineId?: string;
	psnRegion?: string;
	channelId?: number;
	subChannelId?: number;
	countryCode?: string;
	psnId?: string;
	clientIpStr?: string;
}

