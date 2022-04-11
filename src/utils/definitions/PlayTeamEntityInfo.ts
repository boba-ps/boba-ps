import * as AbilitySyncStateInfo_proto from "./AbilitySyncStateInfo"

export interface PlayTeamEntityInfo {
	entityId?: number;
	playerUid?: number;
	authorityPeerId?: number;
	gadgetConfigId?: number;
	abilityInfo?: AbilitySyncStateInfo_proto.AbilitySyncStateInfo;
}

