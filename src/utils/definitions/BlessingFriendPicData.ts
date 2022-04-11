import * as ProfilePicture_proto from "./ProfilePicture"

export interface BlessingFriendPicData {
	uid?: number;
	avatarId?: number;
	signature?: string;
	nickname?: string;
	picNumMap?: number;
	remarkName?: string;
	profilePicture?: ProfilePicture_proto.ProfilePicture;
}

