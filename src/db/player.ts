import type { Db } from ".";
import { simpleDecodeUIntArray } from "./encoding";

export type Player = {
  id: number;
  account_id: number;
  nickname: string;
  signature: string;
  main_char_rid: number;
  region_rid: number;
  active_team: number;
  flycloak_rids: number[];
  costume_rids: number[];
};

type PlayerEncoded = Omit<Player, "flycloak_rids" | "costume_rids"> & {
  flycloak_rids: Buffer;
  costume_rids: Buffer;
};

function decodePlayerInternal(player: PlayerEncoded): Player {
  return {
    ...player,
    flycloak_rids: simpleDecodeUIntArray(player.flycloak_rids),
    costume_rids: simpleDecodeUIntArray(player.costume_rids),
  };
}

export type PlayerProp = {
  id: number;
  player_id: number;
  type: number;
  ival: number | null;
  fval: number | null;
};

export type PlayerOpenState = {
  id: number;
  player_id: number;
  type: number;
  value: number;
};

export class PlayerManager {
  constructor(readonly db: Db) {}

  get(id: number): Player | undefined {
    const sx = this.db.sql(
      `select * from players
       where id = $id`
    );

    return decodePlayerInternal(sx.get({ id }));
  }

  getByAccount(id: number): Player[] {
    const sx = this.db.sql(
      `select * from players
       where account_id = $id`
    );

    return sx.all({ id }).map(decodePlayerInternal);
  }

  getProps(player_id: number): PlayerProp[] {
    const sx = this.db.sql(
      `select * from player_props
       where player_id = $player_id`
    );

    return sx.all({ player_id });
  }

  setProp(prop: Omit<PlayerProp, "id">) {
    const sx = this.db.sql(
      `insert into player_props (player_id, type, ival, fval)
       values ($player_id, $type, $ival, $fval)
       on conflict (player_id, type)
       do update set ival = $ival, fval = $fval`
    );

    sx.run(prop);
  }

  getOpenStates(player_id: number): PlayerOpenState[] {
    const sx = this.db.sql(
      `select * from player_open_states
       where player_id = $player_id`
    );

    return sx.all({ player_id });
  }

  setOpenState(state: Omit<PlayerOpenState, "id">) {
    const sx = this.db.sql(
      `insert into player_open_states (player_id, type, value)
       values ($player_id, $type, $value)
       on conflict (player_id, type)
       do update set value = $value`
    );

    sx.run(state);
  }
}
