import type { Db } from ".";

// please, i need associated types in typescript...
export type ConfigKey<T> = { key: string; _value?: T };

export const SchemaVersion: ConfigKey<number> = { key: "schema_version" };

// this is different from src/config.ts: it's saved in the db instead of loaded on startup
export class ConfigManager {
  constructor(readonly db: Db) {
    db.connection.exec(
      `create table if not exists config (
         key    text  primary key not null,
         value  text  not null
       )`
    );
  }

  get<T>({ key }: ConfigKey<T>): T | undefined {
    const sx = this.db.sql(
      `select value from config
       where key = $key`
    );

    const entry = sx.get({ key });
    return typeof entry === "undefined" ? undefined : JSON.parse(entry.value);
  }

  set<T>({ key }: ConfigKey<T>, value: T) {
    const sx = this.db.sql(
      `insert into config (key, value)
       values ($key, $value)
       on conflict (key)
       do update set value = $value`
    );

    const { changes } = sx.run({ key, value: JSON.stringify(value) });
    return changes;
  }
}
