import * as ProfilePicture_proto from "./ProfilePicture"

export interface BlessingRecvPicRecord {
	uid?: number;
	avatarId?: number;
	nickname?: string;
	signature?: string;
	picId?: number;
	isRecv?: boolean;
	index?: number;
	remarkName?: string;
	profilePicture?: ProfilePicture_proto.ProfilePicture;
}

