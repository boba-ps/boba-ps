import { readFileSync } from "fs";
import path from "path";
import type { Config } from "../config";

export const DefaultEc2bPath = path.join(__dirname, "ec2b.bin");
export const DefaultEc2bKeyPath = path.join(__dirname, "ec2b.key");

export class Ec2bKey {
  readonly ec2b;
  readonly key;

  constructor(config: Config) {
    this.ec2b = readFileSync(config.get("ec2b.path"));
    this.key = readFileSync(config.get("ec2b.keyPath"));
  }

  cipher(buffer: Buffer) {
    buffer = cloneBuffer(buffer);
    xorBuffer(this.key, buffer);
    return buffer;
  }
}

export function cloneBuffer(buffer: Buffer) {
  const other = Buffer.allocUnsafe(buffer.length);
  buffer.copy(other);
  return other;
}

export function xorBuffer(key: Buffer, buffer: Buffer) {
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] ^= key[i % key.length]!;
  }
}
