import * as PlayerDieType_proto from "./PlayerDieType"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 936
}

export interface DungeonPlayerDieReq {
	dungeonId?: number;
	dieType?: PlayerDieType_proto.PlayerDieType;
}

