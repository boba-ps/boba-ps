import * as BlessingFriendPicData_proto from "./BlessingFriendPicData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 2004
}

export interface BlessingGetFriendPicListRsp {
	retcode?: number;
	friendPicDataList?: BlessingFriendPicData_proto.BlessingFriendPicData[];
}

