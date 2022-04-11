import * as Vector_proto from "./Vector"

export interface EvtCombatForceSetPosInfo {
	entityId?: number;
	colliderEntityId?: number;
	iceId?: number;
	targetPos?: Vector_proto.Vector;
}

