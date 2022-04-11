import * as Vector_proto from "./Vector"

export interface EvtLightCoreMove {
	entityId?: number;
	speed?: number;
	targetPos?: Vector_proto.Vector;
	acelerate?: number;
	maxAbsorbTime?: number;
}

