import * as MonsterRoute_proto from "./MonsterRoute"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3095
}

export interface MonsterPointArrayRouteUpdateNotify {
	entityId?: number;
	monsterRoute?: MonsterRoute_proto.MonsterRoute;
}

