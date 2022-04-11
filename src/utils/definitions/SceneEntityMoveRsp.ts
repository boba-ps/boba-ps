import * as MotionInfo_proto from "./MotionInfo"

export enum CmdId {
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	ENET_CHANNEL_ID = 1,
	CMD_ID = 261
}

export interface SceneEntityMoveRsp {
	retcode?: number;
	entityId?: number;
	failMotion?: MotionInfo_proto.MotionInfo;
	sceneTime?: number;
	reliableSeq?: number;
}

