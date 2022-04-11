import * as ProfilePicture_proto from "./ProfilePicture"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4015
}

export interface SetPlayerHeadImageRsp {
	retcode?: number;
	avatarId?: number;
	profilePicture?: ProfilePicture_proto.ProfilePicture;
}

