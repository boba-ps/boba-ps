import * as WorldRoutineInfo_proto from "./WorldRoutineInfo"

export interface WorldRoutineTypeInfo {
	routineType?: number;
	worldRoutineInfoList?: WorldRoutineInfo_proto.WorldRoutineInfo[];
	nextRefreshTime?: number;
}

