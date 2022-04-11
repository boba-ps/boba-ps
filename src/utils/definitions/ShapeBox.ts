import * as Vector_proto from "./Vector"

export interface ShapeBox {
	center?: Vector_proto.Vector;
	axis0?: Vector_proto.Vector;
	axis1?: Vector_proto.Vector;
	axis2?: Vector_proto.Vector;
	extents?: Vector_proto.Vector;
}

