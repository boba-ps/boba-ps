import * as HitColliderType_proto from "./HitColliderType"

import * as Vector_proto from "./Vector"

export interface HitCollision {
	hitColliderType?: HitColliderType_proto.HitColliderType;
	hitBoxIndex?: number;
	hitPoint?: Vector_proto.Vector;
	hitDir?: Vector_proto.Vector;
	attackeeHitForceAngle?: number;
	attackeeHitEntityAngle?: number;
}

