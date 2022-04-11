import * as PlayerRoutineInfo_proto from "./PlayerRoutineInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3503
}

export interface PlayerRoutineDataNotify {
	routineInfoList?: PlayerRoutineInfo_proto.PlayerRoutineInfo[];
}

