import * as CoopPoint_proto from "./CoopPoint"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1994
}

export interface CoopPointUpdateNotify {
	coopPoint?: CoopPoint_proto.CoopPoint;
}

