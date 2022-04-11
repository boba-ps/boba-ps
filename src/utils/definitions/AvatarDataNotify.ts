import * as AvatarInfo_proto from "./AvatarInfo"

import * as AvatarTeam_proto from "./AvatarTeam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1694
}

export interface AvatarDataNotify {
	avatarList?: AvatarInfo_proto.AvatarInfo[];
	avatarTeamMap?: AvatarTeam_proto.AvatarTeam;
	curAvatarTeamId?: number;
	chooseAvatarGuid?: number;
	tempAvatarGuidList?: number[];
	ownedFlycloakList?: number[];
	ownedCostumeList?: number[];
}

