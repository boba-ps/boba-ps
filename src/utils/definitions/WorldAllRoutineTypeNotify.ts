import * as WorldRoutineTypeInfo_proto from "./WorldRoutineTypeInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3543
}

export interface WorldAllRoutineTypeNotify {
	worldRoutineTypeList?: WorldRoutineTypeInfo_proto.WorldRoutineTypeInfo[];
}

