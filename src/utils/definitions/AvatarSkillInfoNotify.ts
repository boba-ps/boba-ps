import * as AvatarSkillInfo_proto from "./AvatarSkillInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1042
}

export interface AvatarSkillInfoNotify {
	guid?: number;
	skillMap?: AvatarSkillInfo_proto.AvatarSkillInfo;
}

