import * as Vector_proto from "./Vector"

import * as HomeBlockSubFieldData_proto from "./HomeBlockSubFieldData"

export interface HomeBlockFieldData {
	guid?: number;
	furnitureId?: number;
	pos?: Vector_proto.Vector;
	rot?: Vector_proto.Vector;
	subFieldList?: HomeBlockSubFieldData_proto.HomeBlockSubFieldData[];
}

