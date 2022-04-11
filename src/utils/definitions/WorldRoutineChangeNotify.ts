import * as WorldRoutineInfo_proto from "./WorldRoutineInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3505
}

export interface WorldRoutineChangeNotify {
	routineType?: number;
	routineInfo?: WorldRoutineInfo_proto.WorldRoutineInfo;
}

