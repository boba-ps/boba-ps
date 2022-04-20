create table guid (
  id                integer     primary key
);

-- Game login account
create table accounts (
  id                integer     primary key,
  username          text        not null,
  password          blob        not null,
  email             text        not null,
  session_token     blob        not null,
  login_token       blob        not null
);

create unique index ix_accounts_username on accounts (username);

-- Game player instance
create table players (
  id                integer     primary key,
  account_id        integer     not null references accounts (id) on delete cascade,
  nickname          text        not null,
  signature         text        not null,
  protagonist_rid   integer     not null,
  region_rid        integer     not null,
  scene_rid         integer     not null,
  scene_enter_token integer     not null,
  active_team       integer     not null,
  flycloak_rids     blob        not null, -- simple-encoded array
  costume_rids      blob        not null, -- simple-encoded array
  pos_x             real        not null,
  pos_y             real        not null,
  pos_z             real        not null,
  world_level       integer     not null
);

create index ix_players_account_id on players (account_id);

-- Player properties
create table player_props (
  id                integer     primary key,
  player_id         integer     not null references players (id) on delete cascade,
  type              integer     not null,
  ival              integer,
  fval              real
);

create unique index ix_player_props_player_id_type on player_props (player_id, type);

-- Player unlocked features
create table player_open_states (
  id                integer     primary key,
  player_id         integer     not null references players (id) on delete cascade,
  type              integer     not null,
  value             integer     not null
);

create unique index ix_player_open_states_player_id_type on player_open_states (player_id, type);

-- Polymorphic item base table
create table items (
  id                integer     primary key,
  type              integer     not null
);

-- Inventory materials
create table item_materials (
  id                integer     primary key references items (id) on delete cascade,
  player_id         integer     not null references players (id) on delete cascade,
  rid               integer     not null,
  count             integer     not null
);

create unique index ix_item_materials_player_id_rid on item_materials (player_id, rid);

-- Inventory artifacts
create table item_reliquaries (
  id                integer     primary key references items (id) on delete cascade,
  player_id         integer     not null references players (id) on delete cascade,
  rid               integer     not null,
  exp               integer     not null,
  level             integer     not null,
  promote_level     integer     not null,
  main_prop_rid     integer     not null,
  append_prop_rids  blob        not null, -- simple-encoded array
  locked            integer     not null
);

create index ix_item_reliquaries_player_id on item_reliquaries (player_id);

-- Inventory weapons
create table item_weapons (
  id                integer     primary key references items (id) on delete cascade,
  player_id         integer     not null references players (id) on delete cascade,
  rid               integer     not null,
  exp               integer     not null,
  level             integer     not null,
  promote_level     integer     not null,
  locked            integer     not null
);

create index ix_item_weapons_player_id on item_weapons (player_id);

-- Player owned characters
create table avatars (
  id                integer     primary key,
  player_id         integer     not null references players (id) on delete cascade,
  rid               integer     not null,
  type              intger      not null,
  life_state_rid    integer     not null,
  weapon_id         integer     not null references item_weapons (id) on delete restrict,
  bracer_id         integer     references item_reliquaries (id) on delete set default,
  necklace_id       integer     references item_reliquaries (id) on delete set default,
  shoes_id          integer     references item_reliquaries (id) on delete set default,
  ring_id           integer     references item_reliquaries (id) on delete set default,
  dress_id          integer     references item_reliquaries (id) on delete set default,
  skill_depot_rid   integer     not null,
  flycloak_rid      integer     not null,
  born_time         integer     not null
);

create index ix_avatars_player_id on avatars (player_id);

-- Character properties
create table avatar_props (
  id                integer     primary key,
  avatar_id         integer     not null references avatars (id) on delete cascade,
  type              integer     not null,
  ival              integer,
  fval              real
);

create unique index ix_avatar_props_avatar_id_type on avatar_props (avatar_id, type);

-- Character fight properties
create table avatar_fight_props (
  id                integer     primary key,
  avatar_id         integer     not null references avatars (id) on delete cascade,
  type              integer     not null,
  value             real        not null
);

create unique index ix_avatar_fight_props_avatar_id_type on avatar_fight_props (avatar_id, type);

-- Character teams
create table avatar_teams (
  id                integer     primary key,
  player_id         integer     not null references players (id) on delete cascade,
  sort              integer     not null,
  name              text        not null,
  active_avatar     integer     not null
);

create unique index ix_avatar_teams_player_id_index on avatar_teams (player_id, sort);

-- Character to team link (many to many)
create table avatar_team_links (
  id                integer     primary key,
  team_id           integer     not null references avatar_teams (id) on delete cascade,
  avatar_id         integer     not null references avatars (id) on delete cascade,
  sort              integer     not null
);

create index ix_avatar_team_links_team_id on avatar_team_links (team_id);

-- World instances
create table worlds (
  id                integer     primary key,
  owner_id          integer     not null references players (id) on delete cascade,
  time              integer     not null
);

create index ix_worlds_owner_id on worlds (owner_id);

-- World properties
create table world_props (
  id                integer     primary key,
  world_id          integer     not null references worlds (id) on delete cascade,
  type              integer     not null,
  ival              integer,
  fval              real
);

create unique index ix_world_props_world_id_type on world_props (world_id, type);

-- Players to worlds link (one to one)
create table world_players (
  player_id         integer     primary key references players (id) on delete cascade,
  world_id          integer     not null references worlds (id) on delete cascade,
  peer_index        integer     not null
);

create unique index ix_world_players_world_id_peer_index on world_players (world_id, peer_index);

-- Polymorphic entity base table
create table entities (
  id                integer     primary key,
  type              integer     not null
);

-- Avatar entities
create table entity_avatars (
  id                integer     primary key references entities (id) on delete cascade,
  avatar_id         integer     not null references avatars (id) on delete cascade
);

create unique index ix_entity_avatars_avatar_id on entity_avatars (avatar_id);

-- Monster entities
create table entity_monsters (
  id                integer     primary key references entities (id) on delete cascade
);

-- NPC entities
create table entity_npcs (
  id                integer     primary key references entities (id) on delete cascade
);

-- Gadget entities
create table entity_gadgets (
  id                integer     primary key references entities (id) on delete cascade
);

-- Weapon entities
create table entity_weapons (
  id                integer     primary key references entities (id) on delete cascade,
  weapon_id         integer     not null references item_weapons (id) on delete cascade
);

create unique index ix_entity_weapons_weapon_id on entity_weapons (weapon_id);

-- Team entities
create table entity_teams (
  id                integer     primary key references entities (id) on delete cascade,
  team_id           integer     not null references avatar_teams (id) on delete cascade
);

create unique index ix_entity_teams_team_id on entity_teams (team_id);

-- Level entities
create table entity_levels (
  id                integer     primary key references entities (id) on delete cascade,
  world_id          integer     not null references worlds (id) on delete cascade
);

create unique index ix_entity_levels_world_id on entity_levels (world_id);

-- temporary stuff
insert into accounts (id, username, password, email, session_token, login_token)
values (1, 'Boba', zeroblob(0), 'boba@mihoyo.com', randomblob(32), randomblob(32));

-- 1: weapon, 2: avatar, 3: level, 4: avatar, 5: team
insert into entities (id, type)
values (501, 6), (502, 1), (503, 11), (504, 1), (505, 9);

insert into players (
  id,
  account_id,
  nickname,
  signature,
  protagonist_rid,
  region_rid,
  scene_rid,
  scene_enter_token,
  active_team,
  flycloak_rids,
  costume_rids,
  pos_x,
  pos_y,
  pos_z,
  world_level
)
values (
  6064,
  1,
  'Boba',
  'Test account',
  10000007,
  1,
  3,
  0,
  0,
  zeroblob(0),
  zeroblob(0),
  2748,
  194,
  -1719,
  6
);

insert into player_props (
  player_id,
  type,
  ival
)
values 
  (6064, 10004, 1),
  (6064, 10005, 50),
  (6064, 10006, 1),
  (6064, 10007, 0),
  (6064, 10008, 1),
  (6064, 10009, 1),
  (6064, 10010, 1000000),
  (6064, 10011, 1000000),
  (6064, 10012, 0),
  (6064, 10013, 10),
  (6064, 10014, 1000000),
  (6064, 10015, 30),
  (6064, 10016, 3397),
  (6064, 10017, 2),
  (6064, 10018, 1),
  (6064, 10019, 6),
  (6064, 10020, 160),
  (6064, 10022, 0),
  (6064, 10023, 0),
  (6064, 10025, 0),
  (6064, 10026, 0),
  (6064, 10027, 0),
  (6064, 10035, 0),
  (6064, 10036, 0),
  (6064, 10037, 0),
  (6064, 10038, 0),
  (6064, 10039, 0),
  (6064, 10040, 0),
  (6064, 10041, 0),
  (6064, 10042, 0),
  (6064, 10043, 0),
  (6064, 10044, 0);

insert into player_open_states (
  player_id,
  type,
  value
)
values
  (6064, 1, 1),
  (6064, 2, 1),
  (6064, 3, 1),
  (6064, 4, 1),
  (6064, 5, 1),
  (6064, 6, 1),
  (6064, 10, 1),
  (6064, 11, 1),
  (6064, 12, 1),
  (6064, 16, 1),
  (6064, 18, 1),
  (6064, 19, 1),
  (6064, 21, 1),
  (6064, 22, 1),
  (6064, 23, 1),
  (6064, 25, 1),
  (6064, 27, 1),
  (6064, 28, 1),
  (6064, 29, 1),
  (6064, 30, 1),
  (6064, 37, 1),
  (6064, 38, 1),
  (6064, 45, 1),
  (6064, 50, 1),
  (6064, 55, 1),
  (6064, 65, 1),
  (6064, 901, 1),
  (6064, 902, 1),
  (6064, 903, 1),
  (6064, 1001, 1),
  (6064, 1003, 1),
  (6064, 1007, 1),
  (6064, 1300, 1),
  (6064, 1403, 1),
  (6064, 2101, 1);

insert into worlds (id, owner_id, time)
values (1000, 6064, 480);

insert into world_props (world_id, type, ival)
values (1000, 1, 6);

insert into entity_levels (id, world_id)
values (503, 1000);

insert into world_players (player_id, world_id, peer_index)
values (6064, 1000, 0);

insert into items (id, type)
values (2000, 4);

insert into item_weapons (
  id,
  player_id,
  rid,
  exp,
  level,
  promote_level,
  locked
)
values (
  2000,
  6064,
  11101,
  0,
  1,
  1,
  0
);

insert into entity_weapons (id, weapon_id)
values (501, 2000);

insert into avatars (
  id,
  player_id,
  rid,
  type,
  life_state_rid,
  weapon_id,
  bracer_id,
  necklace_id,
  shoes_id,
  ring_id,
  dress_id,
  skill_depot_rid,
  flycloak_rid,
  born_time
)
values (
  10,
  6064,
  10000007,
  1,
  1,
  2000,
  null,
  null,
  null,
  null,
  null,
  701,
  140001,
  1
), (
  11,
  6064,
  10000005,
  1,
  1,
  2000,
  null,
  null,
  null,
  null,
  null,
  701,
  140001,
  1
);

insert into avatar_props (
  avatar_id,
  type,
  ival
)
values
  (10, 1001, 1000),
  (10, 1002, 0),
  (10, 1003, 0),
  (10, 1004, 0),
  (10, 4001, 5);

insert into avatar_fight_props (
  avatar_id,
  type,
  value
)
values
  (10, 1, 987.4696044921875),
  (10, 3, 0.03099999949336052),
  (10, 4, 42.53106689453125),
  (10, 6, 0),
  (10, 7, 61.97467041015625),
  (10, 20, 0.05000000074505806),
  (10, 21, 0),
  (10, 22, 0.5),
  (10, 23, 1),
  (10, 26, 0),
  (10, 27, 0),
  (10, 28, 0),
  (10, 29, 0),
  (10, 30, 0),
  (10, 40, 0),
  (10, 41, 0),
  (10, 42, 0),
  (10, 43, 0),
  (10, 44, 0),
  (10, 45, 0),
  (10, 46, 0),
  (10, 50, 0),
  (10, 51, 0),
  (10, 52, 0),
  (10, 53, 0),
  (10, 54, 0),
  (10, 55, 0),
  (10, 56, 0),
  (10, 74, 60),
  (10, 1010, 979.8616333007812),
  (10, 2000, 1018.0811767578125),
  (10, 2001, 42.53106689453125),
  (10, 2002, 61.97467041015625),
  (10, 2003, 0);

insert into entity_avatars (id, avatar_id)
values (502, 10), (504, 11);

insert into avatar_teams (
  id,
  player_id,
  sort,
  name,
  active_avatar
)
values (
  100,
  6064,
  0,
  'team 1',
  0
);

insert into entity_teams (id, team_id)
values (505, 100);

insert into avatar_team_links (
  id,
  team_id,
  avatar_id,
  sort
)
values (
  150,
  100,
  10,
  0
), (
  151,
  100,
  11,
  1
);
