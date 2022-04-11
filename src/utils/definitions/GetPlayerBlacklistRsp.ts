import * as FriendBrief_proto from "./FriendBrief"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4020
}

export interface GetPlayerBlacklistRsp {
	retcode?: number;
	blacklist?: FriendBrief_proto.FriendBrief[];
}

