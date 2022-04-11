import * as OnlinePlayerInfo_proto from "./OnlinePlayerInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 3109
}

export interface WorldPlayerInfoNotify {
	playerInfoList?: OnlinePlayerInfo_proto.OnlinePlayerInfo[];
	playerUidList?: number[];
}

