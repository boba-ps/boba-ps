import * as AbilitySyncStateInfo_proto from "./AbilitySyncStateInfo"

import * as AbilityControlBlock_proto from "./AbilityControlBlock"

export interface TeamEnterSceneInfo {
	teamEntityId?: number;
	teamAbilityInfo?: AbilitySyncStateInfo_proto.AbilitySyncStateInfo;
	abilityControlBlock?: AbilityControlBlock_proto.AbilityControlBlock;
}

