import * as MotionInfo_proto from "./MotionInfo"

export interface EntityMoveFailInfo {
	retcode?: number;
	entityId?: number;
	failMotion?: MotionInfo_proto.MotionInfo;
	sceneTime?: number;
	reliableSeq?: number;
}

