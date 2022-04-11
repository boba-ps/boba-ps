import * as PlayerHomeCompInfo_proto from "./PlayerHomeCompInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4628
}

export interface PlayerHomeCompInfoNotify {
	compInfo?: PlayerHomeCompInfo_proto.PlayerHomeCompInfo;
}

