import * as RoutePointChangeInfo_proto from "./RoutePointChangeInfo"

export interface SceneRouteChangeInfo {
	routeId?: number;
	type?: number;
	isForward?: boolean;
	pointList?: RoutePointChangeInfo_proto.RoutePointChangeInfo[];
}

