import * as HomeAvatarSummonEventInfo_proto from "./HomeAvatarSummonEventInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4493
}

export interface HomeAvatarSummonAllEventNotify {
	summonEventList?: HomeAvatarSummonEventInfo_proto.HomeAvatarSummonEventInfo[];
}

