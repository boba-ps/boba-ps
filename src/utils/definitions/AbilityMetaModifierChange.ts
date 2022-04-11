import * as ModifierAction_proto from "./ModifierAction"

import * as AbilityString_proto from "./AbilityString"

import * as AbilityAttachedModifier_proto from "./AbilityAttachedModifier"

import * as ModifierProperty_proto from "./ModifierProperty"

export interface AbilityMetaModifierChange {
	action?: ModifierAction_proto.ModifierAction;
	parentAbilityName?: AbilityString_proto.AbilityString;
	parentAbilityOverride?: AbilityString_proto.AbilityString;
	attachedInstancedModifier?: AbilityAttachedModifier_proto.AbilityAttachedModifier;
	properties?: ModifierProperty_proto.ModifierProperty[];
	modifierLocalId?: number;
	isMuteRemote?: boolean;
	applyEntityId?: number;
	isAttachedParentAbility?: boolean;
	serverBuffUid?: number;
}

