import * as ShapeSphere_proto from "./ShapeSphere"

import * as ShapeBox_proto from "./ShapeBox"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 302
}

export interface MassiveEntityElementOpBatchNotify {
	shapeSphere?: ShapeSphere_proto.ShapeSphere;
	shapeBox?: ShapeBox_proto.ShapeBox;
	userId?: number;
	attackerId?: number;
	attackElementDurability?: number;
	sourceElementType?: number;
	reactionSourceType?: number;
	entityType?: number;
	opIdx?: number;
}

