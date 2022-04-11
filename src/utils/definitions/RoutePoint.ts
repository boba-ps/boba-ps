import * as Vector_proto from "./Vector"

import * as MathQuaternion_proto from "./MathQuaternion"

export interface RoutePoint {
	velocity?: number;
	time?: number;
	rotation?: Vector_proto.Vector;
	rotationSpeed?: MathQuaternion_proto.MathQuaternion;
	axisSpeed?: MathQuaternion_proto.MathQuaternion;
	position?: Vector_proto.Vector;
	arriveRange?: number;
}

