import type { Db } from "../db";
import type { DbObject } from "../db/schema";

export abstract class DbWrapper {
  constructor(protected readonly db: Db) {}

  protected query(sql: string) {
    return this.db.query(sql);
  }
}

export abstract class DbEntry<T extends DbObject> extends DbWrapper {
  get id() {
    return this.value.id;
  }

  constructor(db: Db, readonly value: T) {
    super(db);
  }
}
