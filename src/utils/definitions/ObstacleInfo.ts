import * as Vector_proto from "./Vector"

import * as MathQuaternion_proto from "./MathQuaternion"

import * as Vector3Int_proto from "./Vector3Int"

export enum ShapeType {
	OBSTACLE_SHAPE_CAPSULE = 0,
	OBSTACLE_SHAPE_BOX = 1
}

export interface ObstacleInfo {
	obstacleId?: number;
	shape?: ShapeType;
	center?: Vector_proto.Vector;
	rotation?: MathQuaternion_proto.MathQuaternion;
	extents?: Vector3Int_proto.Vector3Int;
}

