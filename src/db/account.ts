import { randomBytes } from "crypto";
import type { Db } from ".";

export type Account = {
  id: number;
  username: string;
  password: Buffer;
  email: string;
  session_token?: Buffer;
  login_token?: Buffer;
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

  createAccount(accountData:Account) {
    this.db.sql(
      `insert into accounts (username, password, email, session_token, login_token) values (${accountData.id}, ${accountData.username}, ${accountData.password}, ${accountData.session_token ?? randomBytes(32)} ${accountData.session_token ?? randomBytes(32)})`
    )
  }
}
