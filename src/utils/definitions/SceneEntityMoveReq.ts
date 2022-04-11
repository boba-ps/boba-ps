import * as MotionInfo_proto from "./MotionInfo"

export enum CmdId {
	ENET_IS_RELIABLE = 0,
	NONE = 0,
	ENET_CHANNEL_ID = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 242
}

export interface SceneEntityMoveReq {
	entityId?: number;
	motionInfo?: MotionInfo_proto.MotionInfo;
	sceneTime?: number;
	reliableSeq?: number;
}

