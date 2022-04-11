import * as Vector_proto from "./Vector"

import * as MotionState_proto from "./MotionState"

export interface MotionInfo {
	pos?: Vector_proto.Vector;
	rot?: Vector_proto.Vector;
	speed?: Vector_proto.Vector;
	state?: MotionState_proto.MotionState;
	params?: Vector_proto.Vector[];
	refPos?: Vector_proto.Vector;
	refId?: number;
	sceneTime?: number;
	intervalVelocity?: number;
}

