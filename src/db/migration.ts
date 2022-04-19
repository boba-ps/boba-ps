import { readdirSync, readFileSync } from "fs";
import path from "path";
import type { Db } from ".";
import { Log } from "../log";
import { SchemaVersionKey } from "./config";

export class MigrationManager {
  constructor(readonly db: Db) {}

  versions() {
    return readdirSync(path.join(__dirname, "migrations")).map(parseInt).sort();
  }

  apply(version: number) {
    Log.info({ version }, "applying migration");

    const sql = readFileSync(path.join(__dirname, "migrations", `${version}.sql`), "utf8");
    this.db.connection.exec(sql);
  }

  migrate() {
    const current = this.db.config.get(SchemaVersionKey);
    const pending = this.versions().filter((version) => version > current);

    for (const version of pending) {
      this.apply(version);
      this.db.config.set(SchemaVersionKey, version);
    }
  }
}
