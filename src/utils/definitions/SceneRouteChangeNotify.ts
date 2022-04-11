import * as SceneRouteChangeInfo_proto from "./SceneRouteChangeInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 287
}

export interface SceneRouteChangeNotify {
	sceneId?: number;
	routeList?: SceneRouteChangeInfo_proto.SceneRouteChangeInfo[];
	sceneTime?: number;
}

