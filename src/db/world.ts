import type { Db } from ".";
import type { Player } from "./player";

export type World = {
  id: number;
  owner_id: number;
  time: number;
};

export type WorldPlayer = Player & {
  peer_index: number;
};

export type WorldProp = {
  id: number;
  world_id: number;
  type: number;
  ival: number | null;
  fval: number | null;
};

export class WorldManager {
  constructor(readonly db: Db) {}

  get(id: number): World | undefined {
    const sx = this.db.sql(
      `select * from worlds
       where id = $id`
    );

    return sx.get({ id });
  }

  getByOwner(owner_id: number): World[] {
    const sx = this.db.sql(
      `select * from worlds
       where owner_id = $owner_id`
    );

    return sx.all({ owner_id });
  }

  getByJoined(player_id: number): World | undefined {
    const sx = this.db.sql(
      `select w.* from worlds w
       inner join world_players x
       on
         x.player_id = $player_id and
         x.world_id = w.id`
    );

    return sx.get({ player_id });
  }

  getPlayers(id: number): WorldPlayer[] {
    const sx = this.db.sql(
      `select p.*, x.peer_index from players p
       inner join world_players x
       on
         x.world_id = $id and
         x.player_id = p.id`
    );

    return sx.all({ id });
  }

  getProps(world_id: number): WorldProp[] {
    const sx = this.db.sql(
      `select * from world_props
       where world_id = $world_id`
    );

    return sx.all({ world_id });
  }

  setProp(prop: Omit<WorldProp, "id">) {
    const sx = this.db.sql(
      `insert into world_props (world_id, type, ival, fval)
       values ($world_id, $type, $ival, $fval)
       on conflict (world_id, type)
       do update set ival = $ival, fval = $fval`
    );

    sx.run(prop);
  }
}
