import * as AbilityString_proto from "./AbilityString"

import * as AbilityAttachedModifier_proto from "./AbilityAttachedModifier"

import * as ModifierDurability_proto from "./ModifierDurability"

export interface AbilityAppliedModifier {
	modifierLocalId?: number;
	parentAbilityEntityId?: number;
	parentAbilityName?: AbilityString_proto.AbilityString;
	parentAbilityOverride?: AbilityString_proto.AbilityString;
	instancedAbilityId?: number;
	instancedModifierId?: number;
	existDuration?: number;
	attachedInstancedModifier?: AbilityAttachedModifier_proto.AbilityAttachedModifier;
	applyEntityId?: number;
	isAttachedParentAbility?: boolean;
	modifierDurability?: ModifierDurability_proto.ModifierDurability;
	sbuffUid?: number;
	isServerbuffModifier?: boolean;
}

