import * as Vector_proto from "./Vector"

export interface HomeFurnitureData {
	furnitureId?: number;
	spawnPos?: Vector_proto.Vector;
	spawnRot?: Vector_proto.Vector;
	parentFurnitureIndex?: number;
	guid?: number;
	version?: number;
}

