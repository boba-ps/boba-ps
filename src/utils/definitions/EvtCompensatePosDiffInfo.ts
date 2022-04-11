import * as Vector_proto from "./Vector"

export interface EvtCompensatePosDiffInfo {
	entityId?: number;
	curHash?: number;
	faceAngleCompact?: number;
	curPos?: Vector_proto.Vector;
	normalizedTimeCompact?: number;
}

