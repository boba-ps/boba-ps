import * as AbilityString_proto from "./AbilityString"

import * as AbilityScalarValueEntry_proto from "./AbilityScalarValueEntry"

export interface AbilityAppliedAbility {
	abilityName?: AbilityString_proto.AbilityString;
	abilityOverride?: AbilityString_proto.AbilityString;
	overrideMap?: AbilityScalarValueEntry_proto.AbilityScalarValueEntry[];
	instancedAbilityId?: number;
}

