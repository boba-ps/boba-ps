import { Equip, Item, Material, Reliquary, SceneReliquaryInfo, SceneWeaponInfo, Weapon } from "boba-protos";
import { DbEntry } from "..";
import { simpleDecodeUIntArray } from "../../db/encoding";
import type { DbItemMaterial, DbItemReliquary, DbItemWeapon } from "../../db/schema";
import { EntityWeaponHandle } from "../entity";

export type ItemHandle = ItemMaterialHandle | ItemEquipHandle;

export class ItemMaterialHandle extends DbEntry<DbItemMaterial> {
  createProto() {
    return Material.create({
      count: this.value.count,
    });
  }

  createItemProto() {
    return Item.create({
      guid: BigInt(this.id),
      itemId: this.value.rid,
      detail: { oneofKind: "material", material: this.createProto() },
    });
  }
}

export type ItemEquipHandle = ItemWeaponHandle | ItemReliquaryHandle;

export class ItemWeaponHandle extends DbEntry<DbItemWeapon> {
  getEntity() {
    return new EntityWeaponHandle(this.db, this.query("select * from entity_weapons where weapon_id = ?").get(this.id));
  }

  createProto() {
    return Weapon.create({
      exp: this.value.exp,
      level: this.value.level,
      promoteLevel: this.value.promote_level,
      // TODO: affix map
    });
  }

  createEquipProto() {
    return Equip.create({
      isLocked: this.value.locked !== 0,
      detail: { oneofKind: "weapon", weapon: this.createProto() },
    });
  }

  createItemProto() {
    return Item.create({
      guid: BigInt(this.id),
      itemId: this.value.rid,
      detail: { oneofKind: "equip", equip: this.createEquipProto() },
    });
  }

  createSceneWeaponInfoProto() {
    return SceneWeaponInfo.create({
      guid: BigInt(this.id),
      entityId: this.getEntity().id,
      itemId: this.value.rid,
      level: this.value.level,
      gadgetId: 50011101,
      // TODO: gadgetId
    });
  }
}

export class ItemReliquaryHandle extends DbEntry<DbItemReliquary> {
  get mainPropRid() {
    return this.value.main_prop_rid;
  }

  get appendPropRids() {
    return simpleDecodeUIntArray(this.value.append_prop_rids);
  }

  createProto() {
    return Reliquary.create({
      exp: this.value.exp,
      level: this.value.level,
      promoteLevel: this.value.promote_level,
      mainPropId: this.mainPropRid,
      appendPropIdList: this.appendPropRids,
    });
  }

  createEquipProto() {
    return Equip.create({
      isLocked: this.value.locked !== 0,
      detail: { oneofKind: "reliquary", reliquary: this.createProto() },
    });
  }

  createItemProto() {
    return Item.create({
      guid: BigInt(this.id),
      itemId: this.value.rid,
      detail: { oneofKind: "equip", equip: this.createEquipProto() },
    });
  }

  createSceneReliquaryInfoProto() {
    return SceneReliquaryInfo.create({
      guid: BigInt(this.id),
      itemId: this.value.rid,
      level: this.value.level,
    });
  }
}
