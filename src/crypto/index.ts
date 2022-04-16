import { readFile } from "fs/promises";
import path from "path";
import type { Config } from "../config";

export const DefaultEc2bPath = path.join(__dirname, "ec2b.bin");
export const DefaultEc2bKeyPath = path.join(__dirname, "ec2b.key");

export type Ec2bKey = {
  ec2b: Buffer;
  key: Buffer;
};

export async function readEc2b(config: Config): Promise<Ec2bKey> {
  return {
    ec2b: await readFile(config.get("ec2b.path")),
    key: await readFile(config.get("ec2b.keyPath")),
  };
}

export function cipherEc2b(ec2b: Ec2bKey, buffer: ArrayBufferLike): Buffer {
  const src = new Uint8Array(buffer);
  const dst = Buffer.alloc(src.byteLength);
  const { key } = ec2b;

  for (let i = 0; i < src.byteLength; i++) {
    dst[i] = src[i]! ^ key[i % key.length]!;
  }

  return dst;
}
