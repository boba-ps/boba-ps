import * as ProfilePicture_proto from "./ProfilePicture"

export interface GadgetPlayUidInfo {
	uid?: number;
	score?: number;
	icon?: number;
	nickname?: string;
	onlineId?: string;
	battleWatcherId?: number;
	profilePicture?: ProfilePicture_proto.ProfilePicture;
}

