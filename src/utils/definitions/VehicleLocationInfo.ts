import * as Vector_proto from "./Vector"

export interface VehicleLocationInfo {
	entityId?: number;
	gadgetId?: number;
	ownerUid?: number;
	pos?: Vector_proto.Vector;
	rot?: Vector_proto.Vector;
	curHp?: number;
	maxHp?: number;
	uidList?: number[];
}

