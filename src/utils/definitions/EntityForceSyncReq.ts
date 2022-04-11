import * as MotionInfo_proto from "./MotionInfo"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 295
}

export interface EntityForceSyncReq {
	entityId?: number;
	motionInfo?: MotionInfo_proto.MotionInfo;
	sceneTime?: number;
	roomId?: number;
}

