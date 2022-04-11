import * as AbilitySyncStateInfo_proto from "./AbilitySyncStateInfo"

import * as EntityRendererChangedInfo_proto from "./EntityRendererChangedInfo"

import * as SceneEntityAiInfo_proto from "./SceneEntityAiInfo"

import * as Vector_proto from "./Vector"

import * as AnimatorParameterValueInfoPair_proto from "./AnimatorParameterValueInfoPair"

export interface EntityAuthorityInfo {
	abilityInfo?: AbilitySyncStateInfo_proto.AbilitySyncStateInfo;
	rendererChangedInfo?: EntityRendererChangedInfo_proto.EntityRendererChangedInfo;
	aiInfo?: SceneEntityAiInfo_proto.SceneEntityAiInfo;
	bornPos?: Vector_proto.Vector;
	poseParaList?: AnimatorParameterValueInfoPair_proto.AnimatorParameterValueInfoPair[];
}

