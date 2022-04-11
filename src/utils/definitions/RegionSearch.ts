import * as RegionSearchState_proto from "./RegionSearchState"

export interface RegionSearch {
	regionSearchId?: number;
	state?: RegionSearchState_proto.RegionSearchState;
	progress?: number;
	isEntered?: boolean;
}

