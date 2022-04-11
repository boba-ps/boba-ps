import * as PlayerDieType_proto from "./PlayerDieType"

import * as StrengthenPointData_proto from "./StrengthenPointData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 912
}

export interface DungeonPlayerDieNotify {
	monsterId?: number;
	gadgetId?: number;
	dungeonId?: number;
	dieType?: PlayerDieType_proto.PlayerDieType;
	reviveCount?: number;
	waitTime?: number;
	murdererEntityId?: number;
	strengthenPointDataMap?: StrengthenPointData_proto.StrengthenPointData;
}

