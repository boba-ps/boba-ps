import * as Vector_proto from "./Vector"

export interface MassiveBoxInfo {
	id?: number;
	configId?: number;
	center?: Vector_proto.Vector;
	extents?: Vector_proto.Vector;
	up?: Vector_proto.Vector;
	forward?: Vector_proto.Vector;
	right?: Vector_proto.Vector;
}

