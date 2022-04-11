import * as Vector_proto from "./Vector"

import * as MathQuaternion_proto from "./MathQuaternion"

import * as MovingPlatformType_proto from "./MovingPlatformType"

import * as Route_proto from "./Route"

export interface PlatformInfo {
	routeId?: number;
	startIndex?: number;
	startRouteTime?: number;
	startSceneTime?: number;
	startPos?: Vector_proto.Vector;
	isStarted?: boolean;
	startRot?: MathQuaternion_proto.MathQuaternion;
	stopSceneTime?: number;
	posOffset?: Vector_proto.Vector;
	rotOffset?: MathQuaternion_proto.MathQuaternion;
	movingPlatformType?: MovingPlatformType_proto.MovingPlatformType;
	isActive?: boolean;
	route?: Route_proto.Route;
	pointId?: number;
}

