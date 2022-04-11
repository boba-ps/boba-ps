import * as Vector_proto from "./Vector"

export interface TreasureMapRegionInfo {
	regionId?: number;
	startTime?: number;
	regionCenterPos?: Vector_proto.Vector;
	regionRadius?: number;
	currentProgress?: number;
	goalPoints?: number;
	sceneId?: number;
	isFindMpSpot?: boolean;
	isDoneMpSpot?: boolean;
}

