import * as Vector_proto from "./Vector"

export interface EvtRushMoveInfo {
	entityId?: number;
	velocity?: Vector_proto.Vector;
	timeRange?: number;
	stateNameHash?: number;
	faceAngleCompact?: number;
	pos?: Vector_proto.Vector;
	rushAttackTargetPos?: Vector_proto.Vector;
	rushToPos?: Vector_proto.Vector;
}

