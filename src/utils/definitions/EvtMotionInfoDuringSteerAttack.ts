import * as Vector_proto from "./Vector"

export interface EvtMotionInfoDuringSteerAttack {
	entityId?: number;
	velocity?: Vector_proto.Vector;
	faceDir?: Vector_proto.Vector;
	pos?: Vector_proto.Vector;
}
