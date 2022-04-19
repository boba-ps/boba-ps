import { AvatarInfo } from "boba-protos";
import type { Avatar, AvatarFightProp } from "../../../db/avatar";
import { createFightPropMap } from "../fightPropProto";

export function createAvatarInfoProto(
  avatar: Avatar & {
    fightProps: AvatarFightProp[];
  }
): AvatarInfo {
  return AvatarInfo.create({
    avatarId: avatar.rid,
    avatarType: 1,
    guid: BigInt(avatar.id),
    lifeState: avatar.life_state_rid,
    equipGuidList: getEquipGuidList(avatar),
    fightPropMap: createFightPropMap(avatar.fightProps),
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
