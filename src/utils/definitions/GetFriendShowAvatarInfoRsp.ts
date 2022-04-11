import * as ShowAvatarInfo_proto from "./ShowAvatarInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4008
}

export interface GetFriendShowAvatarInfoRsp {
	retcode?: number;
	uid?: number;
	showAvatarInfoList?: ShowAvatarInfo_proto.ShowAvatarInfo[];
}

