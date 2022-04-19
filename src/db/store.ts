import type { Db } from ".";
import { simpleDecodeUIntArray } from "./encoding";

export type StoreMaterial = {
  id: number;
  player_id: number;
  rid: number;
  count: number;
};

export type StoreWeapon = {
  id: number;
  player_id: number;
  rid: number;
  exp: number;
  level: number;
  promote_level: number;
  locked: number;
};

export type StoreReliquary = {
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

export type StoreMaterialTagged = StoreMaterial & { type: "material" };
export type StoreWeaponTagged = StoreWeapon & { type: "weapon" };
export type StoreReliquaryTagged = StoreReliquary & { type: "reliquary" };

type StoreReliquaryEncoded = Omit<StoreReliquary, "append_prop_rids"> & {
  append_prop_rids: Buffer;
};

function decodeReliquaryInternal(relic: StoreReliquaryEncoded): StoreReliquary {
  return { ...relic, append_prop_rids: simpleDecodeUIntArray(relic.append_prop_rids) };
}

export class StoreManager {
  constructor(readonly db: Db) {}

  getMaterialsByPlayer(player_id: number): StoreMaterial[] {
    const sx = this.db.sql(
      `select * from store_materials
       where player_id = $player_id`
    );

    return sx.all({ player_id });
  }

  getWeaponsPlayer(player_id: number): StoreWeapon[] {
    const sx = this.db.sql(
      `select * from store_weapons
       where player_id = $player_id`
    );

    return sx.all({ player_id });
  }

  getReliquariesByPlayer(player_id: number): StoreReliquary[] {
    const sx = this.db.sql(
      `select * from store_reliquaries
       where player_id = $player_id`
    );

    return sx.all({ player_id }).map(decodeReliquaryInternal);
  }

  getEquipsByPlayer(player_id: number): (StoreWeaponTagged | StoreReliquaryTagged)[] {
    return [
      ...this.getWeaponsPlayer(player_id).map((x) => ({ type: "weapon", ...x } as StoreWeaponTagged)),
      ...this.getReliquariesByPlayer(player_id).map((x) => ({ type: "reliquary", ...x } as StoreReliquaryTagged)),
    ];
  }

  getItemsByPlayer(player_id: number): (StoreWeaponTagged | StoreReliquaryTagged | StoreMaterialTagged)[] {
    return [
      ...this.getEquipsByPlayer(player_id),
      ...this.getMaterialsByPlayer(player_id).map((x) => ({ type: "material", ...x } as StoreMaterialTagged)),
    ];
  }
}
