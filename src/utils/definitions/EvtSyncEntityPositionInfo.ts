import * as Vector_proto from "./Vector"

export interface EvtSyncEntityPositionInfo {
	entityId?: number;
	stateHash?: number;
	normalizedTimeCompact?: number;
	faceAngleCompact?: number;
	pos?: Vector_proto.Vector;
}

