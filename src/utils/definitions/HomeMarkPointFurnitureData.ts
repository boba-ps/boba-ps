import * as HomeMarkPointNPCData_proto from "./HomeMarkPointNPCData"

import * as HomeMarkPointSuiteData_proto from "./HomeMarkPointSuiteData"

import * as Vector_proto from "./Vector"

export interface HomeMarkPointFurnitureData {
	npcData?: HomeMarkPointNPCData_proto.HomeMarkPointNPCData;
	suiteData?: HomeMarkPointSuiteData_proto.HomeMarkPointSuiteData;
	guid?: number;
	furnitureId?: number;
	furnitureType?: number;
	pos?: Vector_proto.Vector;
}

