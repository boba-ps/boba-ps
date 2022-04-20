import type { Db } from ".";
import { simpleDecodeUIntArray } from "./encoding";
import ItemTypes from "../game/player/itemTypes.json";

type ItemBase = {
  id: number;
  type: number;
};

export type Item = ItemMaterial | ItemEquip;
export type ItemEquip = ItemWeapon | ItemReliquary;

export type ItemMaterial = {
  type: "material";
  id: number;
  player_id: number;
  rid: number;
  count: number;
};

export type ItemWeapon = {
  type: "weapon";
  id: number;
  player_id: number;
  rid: number;
  exp: number;
  level: number;
  promote_level: number;
  locked: number;
};

export type ItemReliquary = {
  type: "reliquary";
  id: number;
  player_id: number;
  rid: number;
  exp: number;
  level: number;
  promote_level: number;
  main_prop_rid: number;
  append_prop_rids: number[];
  locked: number;
};

type ItemReliquaryEncoded = Omit<ItemReliquary, "append_prop_rids"> & {
  append_prop_rids: Buffer;
};

function decodeReliquaryInternal(relic: ItemReliquaryEncoded): ItemReliquary {
  return { ...relic, append_prop_rids: simpleDecodeUIntArray(relic.append_prop_rids) };
}

export class ItemManager {
  constructor(readonly db: Db) {}

  get(id: number): Item | undefined {
    const sx = this.db.sql(
      `select * from items
       where id = $id`
    );

    const { type }: ItemBase = sx.get({ id });

    switch (type) {
      case ItemTypes.Material:
        return this.getMaterial(id);

      case ItemTypes.Reliquary:
        return this.getMaterial(id);

      case ItemTypes.Weapon:
        return this.getMaterial(id);
    }

    return;
  }

  getMaterial(id: number): ItemMaterial | undefined {
    const sx = this.db.sql(
      `select * from item_materials
       where id = $id`
    );

    return { ...sx.get({ id }), type: "material" };
  }

  getReliquary(id: number): ItemReliquary | undefined {
    const sx = this.db.sql(
      `select * from item_reliquaries
       where id = $id`
    );

    return decodeReliquaryInternal({ ...sx.get({ id }), type: "reliquary" });
  }

  getWeapon(id: number): ItemWeapon | undefined {
    const sx = this.db.sql(
      `select * from item_weapons
       where id = $id`
    );

    return { ...sx.get({ id }), type: "weapon" };
  }

  getItemsByPlayer(player_id: number): Item[] {
    return [...this.getMaterialsByPlayer(player_id), ...this.getEquipsByPlayer(player_id)];
  }

  getEquipsByPlayer(player_id: number): ItemEquip[] {
    return [...this.getReliquariesByPlayer(player_id), ...this.getWeaponsPlayer(player_id)];
  }

  getMaterialsByPlayer(player_id: number): ItemMaterial[] {
    const sx = this.db.sql(
      `select * from item_materials
       where player_id = $player_id`
    );

    return sx.all({ player_id }).map((x) => ({ ...x, type: "material" }));
  }

  getReliquariesByPlayer(player_id: number): ItemReliquary[] {
    const sx = this.db.sql(
      `select * from item_reliquaries
       where player_id = $player_id`
    );

    return sx
      .all({ player_id })
      .map((x) => ({ ...x, type: "reliquary" }))
      .map(decodeReliquaryInternal);
  }

  getWeaponsPlayer(player_id: number): ItemWeapon[] {
    const sx = this.db.sql(
      `select * from item_weapons
       where player_id = $player_id`
    );

    return sx.all({ player_id }).map((x) => ({ ...x, type: "weapon" }));
  }
}
