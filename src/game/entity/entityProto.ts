import { ProtEntityType, SceneEntityInfo } from "boba-protos";
import type { EntityAvatar, EntityGadget, EntityMonster, EntityNpc } from "../../db/entity";

export function createSceneEntityInfoProto(entity: EntityAvatar | EntityMonster | EntityNpc | EntityGadget) {
  let type;

  switch (entity.type) {
    case "avatar":
      type = ProtEntityType.PROT_ENTITY_AVATAR;
      break;

    case "monster":
      type = ProtEntityType.PROT_ENTITY_MONSTER;
      break;

    case "npc":
      type = ProtEntityType.PROT_ENTITY_NPC;
      break;

    case "gadget":
      type = ProtEntityType.PROT_ENTITY_GADGET;
      break;
  }

  return SceneEntityInfo.create({
    entityId: entity.id,
    entityType: type,
    // TODO: lots of stuff
  });
}
