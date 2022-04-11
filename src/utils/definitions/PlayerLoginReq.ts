import * as TrackingIOInfo_proto from "./TrackingIOInfo"

import * as AdjustTrackingInfo_proto from "./AdjustTrackingInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 189
}

export interface PlayerLoginReq {
	token?: string;
	clientVersion?: string;
	systemVersion?: string;
	deviceName?: string;
	deviceUuid?: string;
	targetUid?: number;
	loginRand?: number;
	isEditor?: boolean;
	languageType?: number;
	accountType?: number;
	accountUid?: string;
	platform?: string;
	deviceInfo?: string;
	platformType?: number;
	isGuest?: boolean;
	cloudClientIp?: number;
	gmUid?: number;
	checksum?: string;
	onlineId?: string;
	clientToken?: number;
	securityCmdReply?: Buffer;
	extraBinData?: Buffer;
	cps?: string;
	channelId?: number;
	subChannelId?: number;
	checksumClientVersion?: string;
	tag?: number;
	trackingIoInfo?: TrackingIOInfo_proto.TrackingIOInfo;
	countryCode?: string;
	clientDataVersion?: number;
	environmentErrorCode?: Buffer;
	targetHomeOwnerUid?: number;
	psnId?: string;
	clientVerisonHash?: string;
	isTransfer?: boolean;
	regPlatform?: number;
	targetHomeParam?: number;
	adjustTrackingInfo?: AdjustTrackingInfo_proto.AdjustTrackingInfo;
}

