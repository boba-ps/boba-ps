import * as HomeAvatarTalkFinishInfo_proto from "./HomeAvatarTalkFinishInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4878
}

export interface HomeAvatarTalkRsp {
	retcode?: number;
	avatarTalkInfo?: HomeAvatarTalkFinishInfo_proto.HomeAvatarTalkFinishInfo;
}

