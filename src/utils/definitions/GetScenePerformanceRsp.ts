import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3298
}

export interface GetScenePerformanceRsp {
	retcode?: number;
	pos?: Vector_proto.Vector;
	groupNum?: number;
	entityNum?: number;
	dynamicGroupNum?: number;
	monsterNum?: number;
	gadgetNum?: number;
	gatherNum?: number;
	gatherNumInsight?: number;
}

