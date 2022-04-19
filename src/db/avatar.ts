import type { Db } from ".";

export type Avatar = {
  id: number;
  player_id: number;
  rid: number;
  life_state_rid: number;
  weapon_id: number;
  bracer_id: number | null;
  necklace_id: number | null;
  shoes_id: number | null;
  ring_id: number | null;
  dress_id: number | null;
  skill_depot_rid: number;
  flycloak_rid: number;
  born_time: number;
};

export type AvatarFightProp = {
  id: number;
  avatar_id: number;
  type: number;
  value: number;
};

export type AvatarTeam = AvatarTeamInternal & {
  avatar_ids: number[];
};

type AvatarTeamInternal = {
  id: number;
  player_id: number;
  index: number;
  name: string;
  active_index: number;
};

type AvatarTeamInternalLink = {
  id: number;
  team_id: number;
  avatar_id: number;
  sort: number;
};

export class AvatarManager {
  constructor(readonly db: Db) {}

  get(id: number): Avatar | undefined {
    const sx = this.db.sql(
      `select * from avatars
       where id = $id`
    );

    return sx.get({ id });
  }

  getByPlayer(player_id: number): Avatar[] {
    const sx = this.db.sql(
      `select * from avatars
       where player_id = $player_id`
    );

    return sx.all({ player_id });
  }

  getFightProps(avatar_id: number): AvatarFightProp[] {
    const sx = this.db.sql(
      `select * from avatar_fight_props
       where avatar_id = $avatar_id`
    );

    return sx.all({ avatar_id });
  }

  getTeamsByPlayer(player_id: number): AvatarTeam[] {
    const sx = this.db.sql(
      `select * from avatar_teams
       where player_id = $player_id
       order by index asc`
    );

    return sx.all({ player_id }).map(this.resolveTeam.bind(this));
  }

  // don't expose avatar_team_links (somewhat ugly implementation detail);
  // let's handle it completely within the database wrapper
  private resolveTeam(team: AvatarTeamInternal): AvatarTeam {
    const sx = this.db.sql(
      `select * from avatar_team_links
       where team_id = $team_id
       order by sort asc`
    );

    const links: AvatarTeamInternalLink[] = sx.all({ team_id: team.id });
    const avatar_ids = links.map(({ avatar_id }) => avatar_id);

    return { ...team, avatar_ids };
  }
}
