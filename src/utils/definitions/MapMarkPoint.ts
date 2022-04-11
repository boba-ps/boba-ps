import * as Vector_proto from "./Vector"

import * as MapMarkPointType_proto from "./MapMarkPointType"

import * as MapMarkFromType_proto from "./MapMarkFromType"

export interface MapMarkPoint {
	sceneId?: number;
	name?: string;
	pos?: Vector_proto.Vector;
	pointType?: MapMarkPointType_proto.MapMarkPointType;
	monsterId?: number;
	fromType?: MapMarkFromType_proto.MapMarkFromType;
	questId?: number;
}

