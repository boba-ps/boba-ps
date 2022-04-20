import {
  AvatarEnterSceneInfo,
  AvatarInfo,
  ProtEntityType,
  SceneAvatarInfo,
  SceneEntityInfo,
  SceneTeamAvatar,
} from "boba-protos";
import type { Avatar, AvatarFightProp, AvatarProp } from "../../../db/avatar";
import type { EntityAvatar, EntityWeapon } from "../../../db/entity";
import type { Player } from "../../../db/player";
import { createPropProtoMap } from "../../propProto";
import { createSceneEntityInfoProto } from "../entityProto";
import { createFightPropMap } from "../fightPropProto";

export function createAvatarInfoProto(
  avatar: Avatar & {
    props: AvatarProp[];
    fightProps: AvatarFightProp[];
  }
) {
  return AvatarInfo.create({
    avatarId: avatar.rid,
    avatarType: avatar.type,
    guid: BigInt(avatar.id),
    lifeState: avatar.life_state_rid,
    propMap: createPropProtoMap(avatar.props),
    fightPropMap: createFightPropMap(avatar.fightProps),
    equipGuidList: getEquipGuidList(avatar),
    skillDepotId: avatar.skill_depot_rid,
    wearingFlycloakId: avatar.flycloak_rid,
    bornTime: avatar.born_time,
    // TODO: fetterInfo, skillLevelMap, pendingPromoteRewardList
  });
}

function getEquipGuidList(avatar: Avatar) {
  const equipGuidList: bigint[] = [];

  if (avatar.weapon_id) equipGuidList.push(BigInt(avatar.weapon_id));
  if (avatar.bracer_id) equipGuidList.push(BigInt(avatar.bracer_id));
  if (avatar.necklace_id) equipGuidList.push(BigInt(avatar.necklace_id));
  if (avatar.shoes_id) equipGuidList.push(BigInt(avatar.shoes_id));
  if (avatar.ring_id) equipGuidList.push(BigInt(avatar.ring_id));

  return equipGuidList;
}

export function createAvatarEnterSceneInfoProto(
  entity: EntityAvatar & {
    avatar: Avatar;
    weaponEntity: EntityWeapon;
  }
) {
  return AvatarEnterSceneInfo.create({
    avatarGuid: BigInt(entity.avatar.id),
    avatarEntityId: entity.id,
    weaponGuid: BigInt(entity.avatar.weapon_id),
    weaponEntityId: entity.weaponEntity.id,
  });
}

export function createSceneAvatarInfoProto(avatar: Avatar) {
  // TODO:
  return SceneAvatarInfo.create({
    guid: BigInt(avatar.id),
  });
}

export function createSceneTeamAvatarProto(
  player: Player,
  entity: EntityAvatar & {
    avatar: Avatar;
    weaponEntity: EntityWeapon;
  }
) {
  return SceneTeamAvatar.create({
    playerUid: player.id,
    sceneId: player.scene_rid,
    avatarGuid: BigInt(entity.avatar.id),
    entityId: entity.id,
    weaponGuid: BigInt(entity.avatar.weapon_id),
    weaponEntityId: entity.weaponEntity.id,
    sceneAvatarInfo: createSceneEntityInfoProto(entity),
    // TODO: isPlayerCurAvatar
  });
}

export function createAvatarSceneEntityInfoProto(
  entity: EntityAvatar & {
    avatar: Avatar;
  }
) {
  return SceneEntityInfo.create({
    entityId: entity.id,
    entityType: ProtEntityType.PROT_ENTITY_AVATAR,
    entity: {
      oneofKind: "avatar",
      avatar: createSceneAvatarInfoProto(entity.avatar),
    },
    // TODO: lots of stuff
  });
}
