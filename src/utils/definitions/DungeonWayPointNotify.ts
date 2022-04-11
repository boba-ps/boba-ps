export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 994
}

export interface DungeonWayPointNotify {
	activeWayPointList?: number[];
	isAdd?: boolean;
}

