import type { Db } from ".";

export type Player = {
  id: number;
};

export class PlayerManager {
  constructor(readonly db: Db) {}

  get(id: number): Player | undefined {
    const sx = this.db.sql(
      `select * from players
       where id = $id`
    );

    return sx.get({ id });
  }

  getByAccount(id: number): Player[] {
    const sx = this.db.sql(
      `select * from players
       where account_id = $id`
    );

    return sx.all({ id });
  }
}
