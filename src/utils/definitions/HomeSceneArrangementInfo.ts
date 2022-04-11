import * as HomeBlockArrangementInfo_proto from "./HomeBlockArrangementInfo"

import * as Vector_proto from "./Vector"

import * as HomeFurnitureData_proto from "./HomeFurnitureData"

export interface HomeSceneArrangementInfo {
	sceneId?: number;
	blockArrangementInfoList?: HomeBlockArrangementInfo_proto.HomeBlockArrangementInfo[];
	isSetBornPos?: boolean;
	bornPos?: Vector_proto.Vector;
	bornRot?: Vector_proto.Vector;
	doorList?: HomeFurnitureData_proto.HomeFurnitureData[];
	stairList?: HomeFurnitureData_proto.HomeFurnitureData[];
	mainHouse?: HomeFurnitureData_proto.HomeFurnitureData;
	comfortValue?: number;
	djinnPos?: Vector_proto.Vector;
	tmpVersion?: number;
}

