create table accounts (
  id            integer     primary key,
  username      text        not null,
  password      blob        not null,
  email         text        not null,
  session_token blob        not null,
  login_token   blob        not null
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
insert into accounts (id, username, password, email, session_token, login_token)
values (1, 'Boba', zeroblob(0), 'boba@mihoyo.com', randomblob(32), randomblob(32));

insert into players (id, account_id, nickname)
values (6064, 1, 'Boba');
