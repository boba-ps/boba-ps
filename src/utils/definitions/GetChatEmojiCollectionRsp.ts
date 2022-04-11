import * as ChatEmojiCollectionData_proto from "./ChatEmojiCollectionData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4069
}

export interface GetChatEmojiCollectionRsp {
	retcode?: number;
	chatEmojiCollectionData?: ChatEmojiCollectionData_proto.ChatEmojiCollectionData;
}

