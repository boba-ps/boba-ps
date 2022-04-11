import * as OnlinePlayerInfo_proto from "./OnlinePlayerInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1803
}

export interface PlayerApplyEnterMpNotify {
	srcPlayerInfo?: OnlinePlayerInfo_proto.OnlinePlayerInfo;
	srcAppId?: number;
	srcThreadIndex?: number;
}

