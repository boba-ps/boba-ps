import * as AbilityScalarValueEntry_proto from "./AbilityScalarValueEntry"

import * as AbilityAppliedAbility_proto from "./AbilityAppliedAbility"

import * as AbilityAppliedModifier_proto from "./AbilityAppliedModifier"

import * as AbilityMixinRecoverInfo_proto from "./AbilityMixinRecoverInfo"

export interface AbilitySyncStateInfo {
	isInited?: boolean;
	dynamicValueMap?: AbilityScalarValueEntry_proto.AbilityScalarValueEntry[];
	appliedAbilities?: AbilityAppliedAbility_proto.AbilityAppliedAbility[];
	appliedModifiers?: AbilityAppliedModifier_proto.AbilityAppliedModifier[];
	mixinRecoverInfos?: AbilityMixinRecoverInfo_proto.AbilityMixinRecoverInfo[];
	sgvDynamicValueMap?: AbilityScalarValueEntry_proto.AbilityScalarValueEntry[];
}

