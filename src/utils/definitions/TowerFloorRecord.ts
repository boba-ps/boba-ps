import * as TowerLevelRecord_proto from "./TowerLevelRecord"

export interface TowerFloorRecord {
	floorId?: number;
	passedLevelMap?: number;
	floorStarRewardProgress?: number;
	passedLevelRecordList?: TowerLevelRecord_proto.TowerLevelRecord[];
}

