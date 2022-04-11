import * as SceneFishInfo_proto from "./SceneFishInfo"

import * as SceneWeaponInfo_proto from "./SceneWeaponInfo"

import * as MonsterBornType_proto from "./MonsterBornType"

import * as MonsterRoute_proto from "./MonsterRoute"

export interface SceneMonsterInfo {
	fishInfo?: SceneFishInfo_proto.SceneFishInfo;
	monsterId?: number;
	groupId?: number;
	configId?: number;
	weaponList?: SceneWeaponInfo_proto.SceneWeaponInfo[];
	authorityPeerId?: number;
	affixList?: number[];
	isElite?: boolean;
	ownerEntityId?: number;
	summonedTag?: number;
	summonTagMap?: number;
	poseId?: number;
	bornType?: MonsterBornType_proto.MonsterBornType;
	blockId?: number;
	markFlag?: number;
	titleId?: number;
	specialNameId?: number;
	attackTargetId?: number;
	monsterRoute?: MonsterRoute_proto.MonsterRoute;
	aiConfigId?: number;
	levelRouteId?: number;
	initPoseId?: number;
}

