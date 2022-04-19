import type { Db } from ".";

export type Account = {
  id: number;
  username: string;
  password: Buffer;
  token: Buffer;
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
}
