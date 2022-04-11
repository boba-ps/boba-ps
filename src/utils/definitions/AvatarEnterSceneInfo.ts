import * as AbilitySyncStateInfo_proto from "./AbilitySyncStateInfo"

import * as ServerBuff_proto from "./ServerBuff"

export interface AvatarEnterSceneInfo {
	avatarGuid?: number;
	avatarEntityId?: number;
	avatarAbilityInfo?: AbilitySyncStateInfo_proto.AbilitySyncStateInfo;
	buffIdList?: number[];
	weaponGuid?: number;
	weaponEntityId?: number;
	weaponAbilityInfo?: AbilitySyncStateInfo_proto.AbilitySyncStateInfo;
	serverBuffList?: ServerBuff_proto.ServerBuff[];
}

