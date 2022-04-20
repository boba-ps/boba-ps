import type { Db } from ".";

export type Account = {
  id: number;
  username: string;
  password: string;
  email: string;
  session_token: Buffer;
  login_token: Buffer;
  country_code:string;
};

export class AccountManager {
  constructor(readonly db: Db) {}

  get(id: number): Account | undefined {
    const sx = this.db.sql(
      `select * from accounts
       where id = $id`
    );

    return sx.get({ id });
  }

  getByName(username: string): Account | undefined {
    const sx = this.db.sql(
      `select * from accounts
       where username = $username`
    );

    return sx.get({ username });
  }

  createAccount(accountData:Account) : void {
    this.db.sql(
      `insert into accounts (account_uid, username, password, email, session_token, login_token, country_code) values (@account_uid, @username, @password, @login_token @session_token, @country_code)`
    ).run(accountData);
  }
}
