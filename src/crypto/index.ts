import { readFile } from "fs/promises";
import path from "path";
import type { Config } from "../config";

export const DefaultEc2bPath = path.join(__dirname, "ec2b.bin");
export const DefaultEc2bKeyPath = path.join(__dirname, "ec2b.key");

export type Ec2bKey = {
  ec2b: Buffer;
  key: Buffer;
};

export async function readEc2bKey(config: Config): Promise<Ec2bKey> {
  return {
    ec2b: await readFile(config.get("ec2b.path")),
    key: await readFile(config.get("ec2b.keyPath")),
  };
}

export function cipherEc2b(ec2b: Ec2bKey, buffer: Buffer) {
  const other = cloneBuffer(buffer);
  xorBuffer(ec2b.key, other);
  return other;
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
