import * as MotionInfo_proto from "./MotionInfo"

export interface EntityMoveInfo {
	entityId?: number;
	motionInfo?: MotionInfo_proto.MotionInfo;
	sceneTime?: number;
	reliableSeq?: number;
	isReliable?: boolean;
}

