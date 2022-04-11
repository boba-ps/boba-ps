import * as OnlinePlayerInfo_proto from "./OnlinePlayerInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4661
}

export interface PlayerApplyEnterHomeNotify {
	srcPlayerInfo?: OnlinePlayerInfo_proto.OnlinePlayerInfo;
	srcAppId?: number;
}

