import * as Vector_proto from "./Vector"

export interface EvtFixedRushMove {
	entityId?: number;
	speed?: number;
	targetPos?: Vector_proto.Vector;
	overrideCollider?: string;
	animatorStateIdList?: number[];
	needSetIsInAir?: boolean;
	checkAnimatorStateOnExitOnly?: boolean;
}

