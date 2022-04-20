create table accounts (
  id            integer(12)     primary key,
  username      text(12)        not null,
  password      text(16)      not null,
  email         text        not null,
  session_token blob        not null,
  login_token   blob        not null,
  country_code  char(2)
);

create unique index ix_accounts_username on accounts (username);

create table players (
  id                        integer     primary key,
  account_id                integer     not null references accounts (id) on delete cascade,
  nickname                  text        not null,
  signature                 text,
  birthday                  date,
  namecard_id               integer     not null,
  finish_achievement_num    integer     not null,
  tower_floor_index         integer     not null,
  tower_level_index         integer     not null,
  avatar_id                 integer,
  level                     number
);

create index ix_players_account_id on players (account_id);

-- temporary
insert into accounts (id, username, password, email, session_token, login_token)
values (1, 'Boba', 'boba_bestps_tm', 'boba@mihoyo.com', randomblob(32), randomblob(32));

insert into players (id, account_id, nickname, signature, birthday, namecard_id, finish_achievement_num, tower_floor_index, tower_level_index, avatar_id, level)
values (694201337, 1, 'BobaPS', 'BobaPS:tm:', '2022-05-21', 210001, 200, 1, 1, 10000007, 60);
