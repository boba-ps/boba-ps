import * as FoundationStatus_proto from "./FoundationStatus"

import * as BuildingInfo_proto from "./BuildingInfo"

export interface FoundationInfo {
	status?: FoundationStatus_proto.FoundationStatus;
	uidList?: number[];
	currentBuildingId?: number;
	beginBuildTimeMs?: number;
	demolitionRefund?: number;
	buildingList?: BuildingInfo_proto.BuildingInfo[];
	currentNum?: number;
	maxNum?: number;
	lockedByUid?: number;
}

