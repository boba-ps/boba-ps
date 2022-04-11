import * as Vector_proto from "./Vector"

export interface EvtSyncTransform {
	entityId?: number;
	entityPos?: Vector_proto.Vector;
	entityRot?: Vector_proto.Vector;
}

