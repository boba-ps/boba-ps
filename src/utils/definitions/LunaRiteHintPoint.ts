import * as Vector_proto from "./Vector"

import * as LunaRiteHintPointType_proto from "./LunaRiteHintPointType"

export interface LunaRiteHintPoint {
	index?: number;
	areaId?: number;
	pos?: Vector_proto.Vector;
	type?: LunaRiteHintPointType_proto.LunaRiteHintPointType;
}

