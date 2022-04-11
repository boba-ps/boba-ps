import * as AvatarTeam_proto from "./AvatarTeam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1642
}

export interface AvatarTeamUpdateNotify {
	avatarTeamMap?: AvatarTeam_proto.AvatarTeam;
	tempAvatarGuidList?: number[];
}

