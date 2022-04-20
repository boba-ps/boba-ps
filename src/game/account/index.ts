import { DbEntry } from "..";
import type { Db } from "../../db";
import type { DbAccount } from "../../db/schema";
import { PlayerHandle } from "../player";

export class AccountHandle extends DbEntry<DbAccount> {
  static fromId(db: Db, id: number) {
    const value = db.query("select * from accounts where id = ?").get(id);
    return value ? new this(db, value) : undefined;
  }

  static fromUsername(db: Db, username: string) {
    const value = db.query("select * from accounts where username = ?").get(username);
    return value ? new this(db, value) : undefined;
  }

  isSessionToken(token: string) {
    return this.value.session_token.toString("hex") === token;
  }

  isLoginToken(token: string) {
    return this.value.login_token.toString("hex") === token;
  }

  getMainPlayer() {
    // TODO: select main player
    return this.getPlayers()[0];
  }

  getPlayers() {
    const sx = this.query("select * from players where account_id = ?");
    return sx.all(this.id).map((v) => new PlayerHandle(this.db, v));
  }
}
