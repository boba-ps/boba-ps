import * as AvatarSatiationData_proto from "./AvatarSatiationData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1780
}

export interface AvatarSatiationDataNotify {
	satiationDataList?: AvatarSatiationData_proto.AvatarSatiationData[];
}

