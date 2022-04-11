import * as AvatarEquipAffixInfo_proto from "./AvatarEquipAffixInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1620
}

export interface AvatarEquipAffixStartNotify {
	avatarGuid?: number;
	equipAffixInfo?: AvatarEquipAffixInfo_proto.AvatarEquipAffixInfo;
}

