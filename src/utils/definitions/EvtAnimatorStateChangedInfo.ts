import * as Vector_proto from "./Vector"

export interface EvtAnimatorStateChangedInfo {
	entityId?: number;
	toStateHash?: number;
	normalizedTimeCompact?: number;
	faceAngleCompact?: number;
	pos?: Vector_proto.Vector;
	fadeDuration?: number;
}

