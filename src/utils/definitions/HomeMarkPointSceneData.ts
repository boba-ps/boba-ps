import * as HomeMarkPointFurnitureData_proto from "./HomeMarkPointFurnitureData"

import * as Vector_proto from "./Vector"

export interface HomeMarkPointSceneData {
	moduleId?: number;
	sceneId?: number;
	furnitureList?: HomeMarkPointFurnitureData_proto.HomeMarkPointFurnitureData[];
	teapotSpiritPos?: Vector_proto.Vector;
}

