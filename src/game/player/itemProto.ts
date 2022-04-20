import { Equip, Item as ItemProto, Material, Reliquary, Weapon } from "boba-protos";
import type { Item, ItemEquip, ItemMaterial, ItemReliquary, ItemWeapon } from "../../db/item";

export function createMaterialProto(material: ItemMaterial) {
  return Material.create({
    count: material.count,
  });
}

export function createWeaponProto(weapon: ItemWeapon) {
  return Weapon.create({
    exp: weapon.exp,
    level: weapon.level,
    promoteLevel: weapon.promote_level,
    // TODO: affix map
  });
}

export function createReliquaryProto(reliquary: ItemReliquary) {
  return Reliquary.create({
    exp: reliquary.exp,
    level: reliquary.level,
    promoteLevel: reliquary.promote_level,
    mainPropId: reliquary.main_prop_rid,
    appendPropIdList: reliquary.append_prop_rids,
  });
}

export function createEquipProto(equip: ItemEquip) {
  let detail: Equip["detail"];

  switch (equip.type) {
    case "weapon":
      detail = { oneofKind: "weapon", weapon: createWeaponProto(equip) };
      break;

    case "reliquary":
      detail = { oneofKind: "reliquary", reliquary: createReliquaryProto(equip) };
      break;
  }

  return Equip.create({
    detail,
    isLocked: equip.locked !== 0,
  });
}

export function createItemProto(item: Item) {
  let detail: ItemProto["detail"];

  switch (item.type) {
    case "material":
      detail = { oneofKind: "material", material: createMaterialProto(item) };
      break;

    case "weapon":
    case "reliquary":
      detail = { oneofKind: "equip", equip: createEquipProto(item) };
      break;
  }

  return ItemProto.create({
    detail,
    guid: BigInt(item.id),
    itemId: item.rid,
  });
}
