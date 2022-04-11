export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 118
}

export interface GetPlayerTokenRsp {
	retcode?: number;
	msg?: string;
	uid?: number;
	token?: string;
	blackUidEndTime?: number;
	accountType?: number;
	accountUid?: string;
	isProficientPlayer?: boolean;
	secretKey?: string;
	gmUid?: number;
	secretKeySeed?: number;
	securityCmdBuffer?: any;
	platformType?: number;
	extraBinData?: Buffer;
	isGuest?: boolean;
	channelId?: number;
	subChannelId?: number;
	tag?: number;
	countryCode?: string;
	isLoginWhiteList?: boolean;
	psnId?: string;
	clientVersionRandomKey?: string;
	regPlatform?: number;
	clientIpStr?: string;
}

