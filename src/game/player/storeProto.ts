import type { Equip, Item, Material, Reliquary, Weapon } from "boba-protos";
import type {
  StoreMaterial,
  StoreMaterialTagged,
  StoreReliquary,
  StoreReliquaryTagged,
  StoreWeapon,
  StoreWeaponTagged,
} from "../../db/store";

export function createMaterialProto(material: StoreMaterial): Material {
  return {
    count: material.count,
  };
}

export function createWeaponProto(weapon: StoreWeapon): Weapon {
  return {
    exp: weapon.exp,
    level: weapon.level,
    promoteLevel: weapon.promote_level,
  } as any; //TODO: affix map
}

export function createReliquaryProto(reliquary: StoreReliquary): Reliquary {
  return {
    exp: reliquary.exp,
    level: reliquary.level,
    promoteLevel: reliquary.promote_level,
    mainPropId: reliquary.main_prop_rid,
    appendPropIdList: reliquary.append_prop_rids,
  };
}

export function createEquipProto(thing: StoreWeaponTagged | StoreReliquaryTagged): Equip {
  let detail: Equip["detail"];

  switch (thing.type) {
    case "weapon":
      detail = { oneofKind: "weapon", weapon: createWeaponProto(thing) };
      break;

    case "reliquary":
      detail = { oneofKind: "reliquary", reliquary: createReliquaryProto(thing) };
      break;
  }

  return {
    detail,
    isLocked: thing.locked !== 0,
  };
}

export function createItemProto(thing: StoreWeaponTagged | StoreReliquaryTagged | StoreMaterialTagged): Item {
  let detail: Item["detail"];

  switch (thing.type) {
    case "material":
      detail = { oneofKind: "material", material: createMaterialProto(thing) };
      break;

    case "weapon":
    case "reliquary":
      detail = { oneofKind: "equip", equip: createEquipProto(thing) };
      break;
  }

  return {
    detail,
    guid: BigInt(thing.id),
    itemId: thing.rid,
  };
}
