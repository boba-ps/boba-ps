import * as MotionInfo_proto from "./MotionInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 299
}

export interface EntityForceSyncRsp {
	retcode?: number;
	entityId?: number;
	failMotion?: MotionInfo_proto.MotionInfo;
	sceneTime?: number;
}

