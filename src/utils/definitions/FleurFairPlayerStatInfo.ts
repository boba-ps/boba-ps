import * as ProfilePicture_proto from "./ProfilePicture"

export interface FleurFairPlayerStatInfo {
	uid?: number;
	statId?: number;
	param?: number;
	headImage?: number;
	nickName?: string;
	onlineId?: string;
	profilePicture?: ProfilePicture_proto.ProfilePicture;
}

