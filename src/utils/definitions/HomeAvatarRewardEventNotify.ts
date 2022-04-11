import * as HomeAvatarRewardEventInfo_proto from "./HomeAvatarRewardEventInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4528
}

export interface HomeAvatarRewardEventNotify {
	isEventTrigger?: boolean;
	rewardEvent?: HomeAvatarRewardEventInfo_proto.HomeAvatarRewardEventInfo;
	pendingList?: HomeAvatarRewardEventInfo_proto.HomeAvatarRewardEventInfo[];
}

