import * as AvatarInfo_proto from "./AvatarInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1795
}

export interface AvatarAddNotify {
	avatar?: AvatarInfo_proto.AvatarInfo;
	isInTeam?: boolean;
}

