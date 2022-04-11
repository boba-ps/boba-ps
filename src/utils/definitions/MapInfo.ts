import * as CellInfo_proto from "./CellInfo"

export interface MapInfo {
	minx?: number;
	maxx?: number;
	minz?: number;
	maxz?: number;
	cells?: CellInfo_proto.CellInfo[];
}

