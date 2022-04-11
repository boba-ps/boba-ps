import * as AbilitySyncStateInfo_proto from "./AbilitySyncStateInfo"

export interface SceneWeaponInfo {
	entityId?: number;
	gadgetId?: number;
	itemId?: number;
	guid?: number;
	level?: number;
	promoteLevel?: number;
	abilityInfo?: AbilitySyncStateInfo_proto.AbilitySyncStateInfo;
	affixMap?: number;
}

