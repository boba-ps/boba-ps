import type { Db } from ".";

export type Player = {
  id: number;
  account_id:number;
  nickname: string;
  signature: string;
  birthday: Date;
  namecard_id: number;
  finish_achievement_num: number;
  tower_floor_index: number;
  tower_level_index: number;
  avatar_id: number;
  level: number;
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

  createPlayer(playerData:Player) : void {
    this.db.sql(
      `insert into players (id, account_id, nickname, signature, birthday, namecard_id, finish_achievement_num, tower_floor,index, tower_level_index, avatar_id) values (@id, @nickname, @signature, @birthday, @namecard_id, @finish_achievement_num, @tower_floor,index, @tower_level_index, @avatar_id)`
    ).run(playerData);
  }
}
