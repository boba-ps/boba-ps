import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 1179
}

export interface RefreshNotify {
	refreshNum?: number;
}

export interface AddWindBulletNotify {
	seedEntityId?: number;
	seedPos?: Vector_proto.Vector;
	catchPlayerUid?: number;
}

export interface AreaNotify {
	areaId?: number;
	areaCode?: Buffer;
	areaType?: number;
}

export interface WindSeedClientNotify {
	refreshNotify?: RefreshNotify;
	addWindBulletNotify?: AddWindBulletNotify;
	areaNotify?: AreaNotify;
}

