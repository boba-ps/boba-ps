import * as AvatarInfo_proto from "./AvatarInfo"

import * as SceneAvatarInfo_proto from "./SceneAvatarInfo"

import * as AbilitySyncStateInfo_proto from "./AbilitySyncStateInfo"

import * as ServerBuff_proto from "./ServerBuff"

import * as SceneEntityInfo_proto from "./SceneEntityInfo"

import * as AbilityControlBlock_proto from "./AbilityControlBlock"

export interface SceneTeamAvatar {
	playerUid?: number;
	avatarGuid?: number;
	sceneId?: number;
	entityId?: number;
	avatarInfo?: AvatarInfo_proto.AvatarInfo;
	sceneAvatarInfo?: SceneAvatarInfo_proto.SceneAvatarInfo;
	avatarAbilityInfo?: AbilitySyncStateInfo_proto.AbilitySyncStateInfo;
	serverBuffList?: ServerBuff_proto.ServerBuff[];
	sceneEntityInfo?: SceneEntityInfo_proto.SceneEntityInfo;
	weaponGuid?: number;
	weaponEntityId?: number;
	weaponAbilityInfo?: AbilitySyncStateInfo_proto.AbilitySyncStateInfo;
	abilityControlBlock?: AbilityControlBlock_proto.AbilityControlBlock;
	isReconnect?: boolean;
	isPlayerCurAvatar?: boolean;
	isOnScene?: boolean;
}

