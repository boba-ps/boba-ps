import { readFileSync } from "fs";
import path from "path";
import type { Config } from "../../config";

export const DefaultTlsPath = path.join(__dirname, "cert.pem");
export const DefaultTlsKeyPath = path.join(__dirname, "cert.key");

export class TlsCert {
  readonly cert;
  readonly key;

  constructor(config: Config) {
    this.cert = readFileSync(config.get("tls.path"), "utf8");
    this.key = readFileSync(config.get("tls.keyPath"), "utf8");
  }
}
