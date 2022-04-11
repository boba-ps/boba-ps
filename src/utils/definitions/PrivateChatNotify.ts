import * as ChatInfo_proto from "./ChatInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5039
}

export interface PrivateChatNotify {
	chatInfo?: ChatInfo_proto.ChatInfo;
}

