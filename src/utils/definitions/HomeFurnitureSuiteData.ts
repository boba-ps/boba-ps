import * as Vector_proto from "./Vector"

export interface HomeFurnitureSuiteData {
	suiteId?: number;
	spawnPos?: Vector_proto.Vector;
	includedFurnitureIndexList?: number[];
	guid?: number;
	isAllowSummon?: boolean;
}

