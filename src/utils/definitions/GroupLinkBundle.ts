import * as Vector_proto from "./Vector"

export interface GroupLinkBundle {
	bundleId?: number;
	center?: Vector_proto.Vector;
	radius?: number;
	isActivated?: boolean;
	sceneId?: number;
}

