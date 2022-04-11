import * as Vector_proto from "./Vector"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 228
}

export interface PersonalSceneJumpRsp {
	retcode?: number;
	destSceneId?: number;
	destPos?: Vector_proto.Vector;
}

