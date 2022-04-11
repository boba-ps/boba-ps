import * as Vector_proto from "./Vector"

export interface OneoffGatherPointDetectorData {
	materialId?: number;
	isAllCollected?: boolean;
	isHintValid?: boolean;
	hintCenterPos?: Vector_proto.Vector;
	hintRadius?: number;
	groupId?: number;
	configId?: number;
}

