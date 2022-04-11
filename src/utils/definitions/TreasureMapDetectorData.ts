import * as Vector_proto from "./Vector"

export interface TreasureMapDetectorData {
	regionId?: number;
	spotList?: Vector_proto.Vector[];
	centerPos?: Vector_proto.Vector;
	radius?: number;
	isRegionDetected?: boolean;
}

