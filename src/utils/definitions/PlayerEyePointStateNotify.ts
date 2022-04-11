import * as Vector_proto from "./Vector"

import * as CylinderRegionSize_proto from "./CylinderRegionSize"

import * as PolygonRegionSize_proto from "./PolygonRegionSize"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 3407
}

export interface PlayerEyePointStateNotify {
	sphereRadius?: number;
	cubicSize?: Vector_proto.Vector;
	cylinderSize?: CylinderRegionSize_proto.CylinderRegionSize;
	polygonSize?: PolygonRegionSize_proto.PolygonRegionSize;
	isUseEyePoint?: boolean;
	eyePointPos?: Vector_proto.Vector;
	regionEntityId?: number;
	regionGroupId?: number;
	regionConfigId?: number;
	regionShape?: number;
	isFilterStreamPos?: boolean;
}

