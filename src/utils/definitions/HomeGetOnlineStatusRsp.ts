import * as OnlinePlayerInfo_proto from "./OnlinePlayerInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4840
}

export interface HomeGetOnlineStatusRsp {
	retcode?: number;
	playerInfoList?: OnlinePlayerInfo_proto.OnlinePlayerInfo[];
}

