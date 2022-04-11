import * as PlayerDieType_proto from "./PlayerDieType"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 254
}

export interface WorldPlayerDieNotify {
	monsterId?: number;
	gadgetId?: number;
	dieType?: PlayerDieType_proto.PlayerDieType;
	murdererEntityId?: number;
}

