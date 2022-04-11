import * as OnlinePlayerInfo_proto from "./OnlinePlayerInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 15
}

export interface GetOnlinePlayerInfoRsp {
	retcode?: number;
	targetUid?: number;
	targetPlayerInfo?: OnlinePlayerInfo_proto.OnlinePlayerInfo;
	param?: number;
}

