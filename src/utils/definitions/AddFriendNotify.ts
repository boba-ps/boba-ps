import * as FriendBrief_proto from "./FriendBrief"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4047
}

export interface AddFriendNotify {
	targetUid?: number;
	targetFriendBrief?: FriendBrief_proto.FriendBrief;
}
