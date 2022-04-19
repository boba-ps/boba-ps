create table accounts (
  id            integer     primary key,
  username      text        not null,
  password      blob        not null,
  token         blob        not null
);

create unique index ix_accounts_username on accounts (username);

create table players (
  id            integer     primary key,
  account_id    integer     not null references accounts (id) on delete cascade,
  nickname      text        not null,
  signature     text
);

create index ix_players_account_id on players (account_id);

-- temporary
insert into accounts (id, username, password, token)
values (1, 'boba', zeroblob(0), zeroblob(0));

insert into players (id, account_id, nickname)
values (6064, 1, 'boba');
