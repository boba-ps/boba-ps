create table accounts (
  id                integer     primary key,
  username          text        not null,
  password          blob        not null,
  email             text        not null,
  session_token     blob        not null,
  login_token       blob        not null
);

create unique index ix_accounts_username on accounts (username);

create table players (
  id                integer     primary key,
  account_id        integer     not null references accounts (id) on delete cascade,
  nickname          text        not null,
  signature         text        not null,
  protagonist_rid   integer     not null,
  region_rid        integer     not null,
  active_team       integer     not null,
  flycloak_rids     blob        not null, -- simple-encoded array
  costume_rids      blob        not null
);

create index ix_players_account_id on players (account_id);

create table player_props (
  id                integer     primary key,
  player_id         integer     not null references players (id) on delete cascade,
  type              integer     not null,
  ival              integer,
  fval              real
);

create unique index ix_player_props_player_id_type on player_props (player_id, type);

create table player_open_states (
  id                integer     primary key,
  player_id         integer     not null references players (id) on delete cascade,
  type              integer     not null,
  value             integer     not null
);

create unique index ix_player_open_states_player_id_type on player_open_states (player_id, type);

create table store_materials (
  id                integer     primary key,
  player_id         integer     not null references players (id) on delete cascade,
  rid               integer     not null,
  count             integer     not null
);

create unique index ix_store_materials_player_id_rid on store_materials (player_id, rid);

create table store_weapons (
  id                integer     primary key,
  player_id         integer     not null references players (id) on delete cascade,
  rid               integer     not null,
  exp               integer     not null,
  level             integer     not null,
  promote_level     integer     not null,
  locked            integer     not null
);

create index ix_store_weapons_player_id on store_weapons (player_id);

create table store_reliquaries (
  id                integer     primary key,
  player_id         integer     not null references players (id) on delete cascade,
  rid               integer     not null,
  exp               integer     not null,
  level             integer     not null,
  promote_level     integer     not null,
  main_prop_rid     integer     not null,
  append_prop_rids  blob        not null, -- simple-encoded array
  locked            integer     not null
);

create index ix_store_reliquaries_player_id on store_reliquaries (player_id);

create table avatars (
  id                integer     primary key,
  player_id         integer     not null references players (id) on delete cascade,
  rid               integer     not null,
  life_state_rid    integer     not null,
  weapon_id         integer     not null references store_weapons (id) on delete restrict,
  bracer_id         integer     references store_reliquary (id) on delete set default,
  necklace_id       integer     references store_reliquary (id) on delete set default,
  shoes_id          integer     references store_reliquary (id) on delete set default,
  ring_id           integer     references store_reliquary (id) on delete set default,
  dress_id          integer     references store_reliquary (id) on delete set default,
  skill_depot_rid   integer     not null,
  flycloak_rid      integer     not null,
  born_time         integer     not null
);

create index ix_avatars_player_id on avatars (player_id);
create index ix_avatars_weapon_id on avatars (weapon_id);
create index ix_avatars_bracer_id on avatars (bracer_id);
create index ix_avatars_necklace_id on avatars (necklace_id);
create index ix_avatars_shoes_id on avatars (shoes_id);
create index ix_avatars_ring_id on avatars (ring_id);
create index ix_avatars_dress_id on avatars (dress_id);

create table avatar_fight_props (
  id                integer     primary key,
  avatar_id         integer     not null references avatars (id) on delete cascade,
  type              integer     not null,
  value             real        not null
);

create unique index ix_avatar_fight_props_avatar_id_type on avatar_fight_props (avatar_id, type);

create table avatar_teams (
  id                integer     primary key,
  player_id         integer     not null references players (id) on delete cascade,
  index             integer     not null,
  name              text        not null,
  active_index      integer     not null
);

create unique index ix_avatar_teams_player_id_index on avatar_teams (player_id, index);

create table avatar_team_links (
  id                integer     primary key,
  team_id           integer     not null references avatar_teams (id) on delete cascade,
  avatar_id         integer     not null references avatars (id) on delete cascade,
  sort              integer     not null
);

create index ix_avatar_team_links_team_id on avatar_team_links (team_id);

-- temporary
insert into accounts (id, username, password, email, session_token, login_token)
values (1, 'Boba', zeroblob(0), 'boba@mihoyo.com', randomblob(32), randomblob(32));

insert into players (id, account_id, nickname, signature, protagonist_rid, region_rid)
values (6064, 1, 'Boba', '', 10000007);
