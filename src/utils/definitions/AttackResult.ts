import * as AbilityIdentifier_proto from "./AbilityIdentifier"

import * as HitCollision_proto from "./HitCollision"

import * as Vector_proto from "./Vector"

import * as AttackHitEffectResult_proto from "./AttackHitEffectResult"

export interface AttackResult {
	attackerId?: number;
	defenseId?: number;
	animEventId?: string;
	abilityIdentifier?: AbilityIdentifier_proto.AbilityIdentifier;
	damage?: number;
	isCrit?: boolean;
	hitCollision?: HitCollision_proto.HitCollision;
	hitPosType?: number;
	endureBreak?: number;
	resolvedDir?: Vector_proto.Vector;
	hitRetreatAngleCompat?: number;
	hitEffResult?: AttackHitEffectResult_proto.AttackHitEffectResult;
	elementType?: number;
	useGadgetDamageAction?: boolean;
	gadgetDamageActionIdx?: number;
	isResistText?: boolean;
	criticalRand?: number;
	elementAmplifyRate?: number;
	damageShield?: number;
	muteElementHurt?: boolean;
	amplifyReactionType?: number;
	addhurtReactionType?: number;
	bulletFlyTimeMs?: number;
	attackCount?: number;
	hashedAnimEventId?: number;
	attackTimestampMs?: number;
	endureDelta?: number;
	targetType?: number;
	elementDurabilityAttenuation?: number;
}

