import * as ProfilePicture_proto from "./ProfilePicture"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4044
}

export interface ProfilePictureChangeNotify {
	profilePicture?: ProfilePicture_proto.ProfilePicture;
}

