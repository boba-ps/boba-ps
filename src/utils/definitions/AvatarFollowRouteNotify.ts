import * as Route_proto from "./Route"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3193
}

export interface AvatarFollowRouteNotify {
	route?: Route_proto.Route;
	startSceneTimeMs?: number;
	entityId?: number;
	clientParams?: string;
}

