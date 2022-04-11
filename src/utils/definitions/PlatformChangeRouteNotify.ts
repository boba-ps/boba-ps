import * as PlatformInfo_proto from "./PlatformInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 262
}

export interface PlatformChangeRouteNotify {
	entityId?: number;
	platform?: PlatformInfo_proto.PlatformInfo;
	sceneTime?: number;
}

