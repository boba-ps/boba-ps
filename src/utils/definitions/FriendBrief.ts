import * as FriendOnlineState_proto from "./FriendOnlineState"

import * as SocialShowAvatarInfo_proto from "./SocialShowAvatarInfo"

import * as FriendEnterHomeOption_proto from "./FriendEnterHomeOption"

import * as ProfilePicture_proto from "./ProfilePicture"

import * as PlatformType_proto from "./PlatformType"

export interface FriendBrief {
	uid?: number;
	nickname?: string;
	level?: number;
	avatarId?: number;
	worldLevel?: number;
	signature?: string;
	onlineState?: FriendOnlineState_proto.FriendOnlineState;
	param?: number;
	isMpModeAvailable?: boolean;
	onlineId?: string;
	lastActiveTime?: number;
	nameCardId?: number;
	mpPlayerNum?: number;
	isChatNoDisturb?: boolean;
	chatSequence?: number;
	remarkName?: string;
	showAvatarInfoList?: SocialShowAvatarInfo_proto.SocialShowAvatarInfo[];
	friendEnterHomeOption?: FriendEnterHomeOption_proto.FriendEnterHomeOption;
	profilePicture?: ProfilePicture_proto.ProfilePicture;
	isGameSource?: boolean;
	isPsnSource?: boolean;
	platformType?: PlatformType_proto.PlatformType;
}

