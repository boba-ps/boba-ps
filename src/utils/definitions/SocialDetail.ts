import * as Birthday_proto from "./Birthday"

import * as FriendOnlineState_proto from "./FriendOnlineState"

import * as SocialShowAvatarInfo_proto from "./SocialShowAvatarInfo"

import * as FriendEnterHomeOption_proto from "./FriendEnterHomeOption"

import * as ProfilePicture_proto from "./ProfilePicture"

export interface SocialDetail {
	uid?: number;
	nickname?: string;
	level?: number;
	avatarId?: number;
	signature?: string;
	birthday?: Birthday_proto.Birthday;
	worldLevel?: number;
	reservedList?: number[];
	onlineState?: FriendOnlineState_proto.FriendOnlineState;
	param?: number;
	isFriend?: boolean;
	isMpModeAvailable?: boolean;
	onlineId?: string;
	nameCardId?: number;
	isInBlacklist?: boolean;
	isChatNoDisturb?: boolean;
	remarkName?: string;
	finishAchievementNum?: number;
	towerFloorIndex?: number;
	towerLevelIndex?: number;
	isShowAvatar?: boolean;
	showAvatarInfoList?: SocialShowAvatarInfo_proto.SocialShowAvatarInfo[];
	showNameCardIdList?: number[];
	friendEnterHomeOption?: FriendEnterHomeOption_proto.FriendEnterHomeOption;
	profilePicture?: ProfilePicture_proto.ProfilePicture;
}

