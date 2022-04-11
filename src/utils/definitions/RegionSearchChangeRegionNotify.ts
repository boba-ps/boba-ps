export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 5643
}

export enum RegionEvent {
	NONE = 0,
	ENTER = 1,
	LEAVE = 2
}

export interface RegionSearchChangeRegionNotify {
	regionId?: number;
	event?: RegionEvent;
}

