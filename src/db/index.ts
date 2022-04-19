import type { Config } from "../config";
import sqlite3, { Statement } from "better-sqlite3";
import { Executor, ServiceBase } from "../system";
import { PlayerManager } from "./player";
import { Log } from "../log";
import { MigrationManager } from "./migration";
import { ConfigManager } from "./config";
import { AccountManager } from "./account";

export class Db extends ServiceBase<Executor> {
  readonly connection;
  readonly transaction;
  readonly config;
  readonly migrations;
  readonly accounts;
  readonly players;

  constructor(config: Config) {
    super();

    this.connection = sqlite3(config.get("db.path"), {
      verbose: (sql) => Log.debug({ sql }, "executing sql statement"),
    });

    this.transaction = this.connection.transaction.bind(this.connection);

    // sqlite go brrr
    this.connection.exec(
      `pragma journal_mode = wal;
       pragma synchronous = normal;
       pragma foreign_keys = on;
       pragma temp_store = memory;
       pragma page_size = 4096;
       pragma mmap_size = 107374182400;
       pragma quick_check;`
    );

    this.config = new ConfigManager(this);
    this.migrations = new MigrationManager(this);
    this.accounts = new AccountManager(this);
    this.players = new PlayerManager(this);
  }

  protected setup(exec: Executor) {
    exec.once(() => {
      this.transaction(() => this.migrations.migrate()).exclusive();
    });
  }

  private readonly sxCache: Record<string, Statement> = {};

  sql(sql: string) {
    return (this.sxCache[sql] ??= this.connection.prepare(sql));
  }
}
