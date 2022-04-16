import { readFile } from "fs/promises";
import path from "path";
import type { Config } from "../../config";

export const DefaultTlsPath = path.join(__dirname, "cert.pem");
export const DefaultTlsKeyPath = path.join(__dirname, "cert.key");

export type TlsCert = {
  cert: string;
  key: string;
};

export async function readTlsCert(config: Config): Promise<TlsCert> {
  return {
    cert: await readFile(config.get("tls.path"), "utf8"),
    key: await readFile(config.get("tls.keyPath"), "utf8"),
  };
}
