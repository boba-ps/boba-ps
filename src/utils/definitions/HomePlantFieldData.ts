import * as HomePlantSubFieldData_proto from "./HomePlantSubFieldData"

import * as Vector_proto from "./Vector"

export interface HomePlantFieldData {
	fieldGuid?: number;
	furnitureId?: number;
	subFieldList?: HomePlantSubFieldData_proto.HomePlantSubFieldData[];
	sceneId?: number;
	spawnPos?: Vector_proto.Vector;
}

