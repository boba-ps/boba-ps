import * as HomeFurnitureData_proto from "./HomeFurnitureData"

import * as HomeNpcData_proto from "./HomeNpcData"

import * as HomeFurnitureSuiteData_proto from "./HomeFurnitureSuiteData"

import * as HomeAnimalData_proto from "./HomeAnimalData"

import * as WeekendDjinnInfo_proto from "./WeekendDjinnInfo"

import * as HomeBlockDotPattern_proto from "./HomeBlockDotPattern"

import * as HomeBlockFieldData_proto from "./HomeBlockFieldData"

export interface HomeBlockArrangementInfo {
	blockId?: number;
	persistentFurnitureList?: HomeFurnitureData_proto.HomeFurnitureData[];
	deployFurniureList?: HomeFurnitureData_proto.HomeFurnitureData[];
	deployNpcList?: HomeNpcData_proto.HomeNpcData[];
	furnitureSuiteList?: HomeFurnitureSuiteData_proto.HomeFurnitureSuiteData[];
	deployAnimalList?: HomeAnimalData_proto.HomeAnimalData[];
	isUnlocked?: boolean;
	comfortValue?: number;
	weekendDjinnInfoList?: WeekendDjinnInfo_proto.WeekendDjinnInfo[];
	dotPatternList?: HomeBlockDotPattern_proto.HomeBlockDotPattern[];
	fieldList?: HomeBlockFieldData_proto.HomeBlockFieldData[];
}

