import * as DealAddFriendResultType_proto from "./DealAddFriendResultType"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4094
}

export interface DealAddFriendReq {
	targetUid?: number;
	dealAddFriendResult?: DealAddFriendResultType_proto.DealAddFriendResultType;
}

