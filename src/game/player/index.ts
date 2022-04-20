import type { Db } from "../../db";
import { WorldHandle } from "../world";
import { PlayerHandleBase } from "./base";
export * from "./base";

export class PlayerHandle extends PlayerHandleBase {
  static fromId(db: Db, id: number) {
    const value = db.query("select * from players where id = ?").get(id);
    return value ? new this(db, value) : undefined;
  }

  getJoinedWorld() {
    const world = this.query(
      `select w.* from worlds w
       inner join world_players x
       on
         x.player_id = ? and
         x.world_id = w.id`
    ).get(this.id);

    return world ? new WorldHandle(this.db, world) : undefined;
  }
}
