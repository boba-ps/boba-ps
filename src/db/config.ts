import type { Db } from ".";
import type StoreWeightLimits from "../game/player/weightLimits.json";

// please, i need associated types in typescript...
export type ConfigKey<T> = { key: string; default: T };

export const SchemaVersionKey: ConfigKey<number> = {
  key: "schema_version",
  default: 0,
};

export const StoreWeightLimitsKey: ConfigKey<Partial<typeof StoreWeightLimits>> = {
  key: "store_weight_limits",
  default: {},
};

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

  get<T>({ key, default: def }: ConfigKey<T>): T {
    const sx = this.db.sql(
      `select value from config
       where key = $key`
    );

    const entry = sx.get({ key });
    return typeof entry === "undefined" ? def : JSON.parse(entry.value);
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
