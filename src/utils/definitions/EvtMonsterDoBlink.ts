import * as Vector_proto from "./Vector"

export interface EvtMonsterDoBlink {
	entityId?: number;
	targetPos?: Vector_proto.Vector;
	targetRot?: Vector_proto.Vector;
}

