import type { Statement } from "better-sqlite3";
import type { Db } from ".";
import EntityTypes from "../game/entity/entityTypes.json";

type EntityBase = {
  id: number;
  type: number;
};

export type Entity = EntityAvatar | EntityMonster | EntityNpc | EntityGadget | EntityWeapon | EntityTeam | EntityLevel;

export type EntityAvatar = {
  type: "avatar";
  id: number;
  avatar_id: number;
};

export type EntityMonster = {
  type: "monster";
  id: number;
};

export type EntityNpc = {
  type: "npc";
  id: number;
};

export type EntityGadget = {
  type: "gadget";
  id: number;
};

export type EntityWeapon = {
  type: "weapon";
  id: number;
};

export type EntityTeam = {
  type: "team";
  id: number;
  team_id: number;
};

export type EntityLevel = {
  type: "level";
  id: number;
  world_id: number;
};

export class EntityManager {
  constructor(readonly db: Db) {}

  get(id: number): Entity | undefined {
    const sx = this.db.sql(
      `select * from entities
       where id = $id`
    );

    const { type }: EntityBase = sx.get({ id });

    switch (type) {
      case EntityTypes.Avatar:
        return this.getAvatar(id);

      case EntityTypes.Monster:
        return this.getMonster(id);

      case EntityTypes.Npc:
        return this.getNpc(id);

      case EntityTypes.Gadget:
        return this.getGadget(id);

      case EntityTypes.Weapon:
        return this.getWeapon(id);

      case EntityTypes.Team:
        return this.getTeam(id);

      case EntityTypes.MpLevel:
        return this.getLevel(id);
    }

    return;
  }

  getAvatar(id: number): EntityAvatar | undefined {
    const sx = this.db.sql(
      `select * from entity_avatars
       where id = $id`
    );

    return { ...sx.get({ id }), type: "avatar" };
  }

  getAvatarByAvatar(avatar_id: number): EntityAvatar | undefined {
    const sx = this.db.sql(
      `select * from entity_avatars
       where avatar_id = $avatar_id`
    );

    return { ...sx.get({ avatar_id }), type: "avatar" };
  }

  getMonster(id: number): EntityMonster | undefined {
    const sx = this.db.sql(
      `select * from entity_monsters
       where id = $id`
    );

    return { ...sx.get({ id }), type: "monster" };
  }

  getNpc(id: number): EntityNpc | undefined {
    const sx = this.db.sql(
      `select * from entity_npcs
       where id = $id`
    );

    return { ...sx.get({ id }), type: "npc" };
  }

  getGadget(id: number): EntityGadget | undefined {
    const sx = this.db.sql(
      `select * from entity_gadgets
       where id = $id`
    );

    return { ...sx.get({ id }), type: "gadget" };
  }

  getWeapon(id: number): EntityWeapon | undefined {
    const sx = this.db.sql(
      `select * from entity_weapons
       where id = $id`
    );

    return { ...sx.get({ id }), type: "weapon" };
  }

  getWeaponByWeapon(weapon_id: number): EntityWeapon | undefined {
    const sx = this.db.sql(
      `select * from entity_weapons
       where weapon_id = $weapon_id`
    );

    return { ...sx.get({ weapon_id }), type: "weapon" };
  }

  getTeam(id: number): EntityTeam | undefined {
    const sx = this.db.sql(
      `select * from entity_teams
       where id = $id`
    );

    return { ...sx.get({ id }), type: "team" };
  }

  getTeamByTeam(team_id: number): EntityTeam | undefined {
    const sx = this.db.sql(
      `select * from entity_teams
       where team_id = $team_id`
    );

    return { ...sx.get({ team_id }), type: "team" };
  }

  getLevel(id: number): EntityLevel | undefined {
    const sx = this.db.sql(
      `select * from entity_levels
       where id = $id`
    );

    return { ...sx.get({ id }), type: "level" };
  }

  getLevelByWorld(world_id: number): EntityLevel | undefined {
    const sx = this.db.sql(
      `select * from entity_levels
       where world_id = $world_id`
    );

    return { ...sx.get({ world_id }), type: "level" };
  }

  private createPolymorphic<T extends any[]>(sxChild: Statement<T>, type: number, params: T) {
    const sx = this.db.sql(
      `insert into entities
       values ($type)
       returning id`
    );

    const { id }: EntityBase = sx.get({ type });
    return sxChild.get({ ...params, id });
  }

  createAvatar(avatar_id: number): EntityAvatar {
    const sx = this.db.sql(
      `insert into entity_avatars (id, avatar_id)
       values ($id, $avatar_id)`
    );

    return this.createPolymorphic(sx, EntityTypes.Avatar, { avatar_id });
  }

  createWeapon(weapon_id: number): EntityWeapon {
    const sx = this.db.sql(
      `insert into entity_weapons (id, weapon_id)
       values ($id, $weapon_id)`
    );

    return this.createPolymorphic(sx, EntityTypes.Weapon, { weapon_id });
  }
}
