import * as MpSettingType_proto from "./MpSettingType"

import * as ProfilePicture_proto from "./ProfilePicture"

export interface OnlinePlayerInfo {
	uid?: number;
	nickname?: string;
	playerLevel?: number;
	avatarId?: number;
	mpSettingType?: MpSettingType_proto.MpSettingType;
	curPlayerNumInWorld?: number;
	worldLevel?: number;
	onlineId?: string;
	nameCardId?: number;
	blacklistUidList?: number[];
	signature?: string;
	profilePicture?: ProfilePicture_proto.ProfilePicture;
	psnId?: string;
}

