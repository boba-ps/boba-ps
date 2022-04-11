import * as SceneAvatarInfo_proto from "./SceneAvatarInfo"

import * as SceneMonsterInfo_proto from "./SceneMonsterInfo"

import * as SceneNpcInfo_proto from "./SceneNpcInfo"

import * as SceneGadgetInfo_proto from "./SceneGadgetInfo"

import * as ProtEntityType_proto from "./ProtEntityType"

import * as MotionInfo_proto from "./MotionInfo"

import * as PropPair_proto from "./PropPair"

import * as FightPropPair_proto from "./FightPropPair"

import * as AnimatorParameterValueInfoPair_proto from "./AnimatorParameterValueInfoPair"

import * as EntityClientData_proto from "./EntityClientData"

import * as EntityEnvironmentInfo_proto from "./EntityEnvironmentInfo"

import * as EntityAuthorityInfo_proto from "./EntityAuthorityInfo"

import * as ServerBuff_proto from "./ServerBuff"
import Build from "../util/buildgen"

export interface SceneEntityInfo {
	avatar?: SceneAvatarInfo_proto.SceneAvatarInfo;
	monster?: SceneMonsterInfo_proto.SceneMonsterInfo;
	npc?: SceneNpcInfo_proto.SceneNpcInfo;
	gadget?: SceneGadgetInfo_proto.SceneGadgetInfo;
	entityType?: ProtEntityType_proto.ProtEntityType;
	entityId?: number;
	name?: string;
	motionInfo?: MotionInfo_proto.MotionInfo;
	propList?: PropPair_proto.PropPair[];
	fightPropList?: FightPropPair_proto.FightPropPair[];
	lifeState?: number;
	animatorParaList?: AnimatorParameterValueInfoPair_proto.AnimatorParameterValueInfoPair[];
	lastMoveSceneTimeMs?: number;
	lastMoveReliableSeq?: number;
	entityClientData?: EntityClientData_proto.EntityClientData;
	entityEnvironmentInfoList?: EntityEnvironmentInfo_proto.EntityEnvironmentInfo[];
	entityAuthorityInfo?: EntityAuthorityInfo_proto.EntityAuthorityInfo;
	tagList?: string[];
	serverBuffList?: ServerBuff_proto.ServerBuff[];
}

