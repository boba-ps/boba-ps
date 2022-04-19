export function simpleEncodeUIntArray(array: number[]) {
  const buffer = Buffer.alloc(array.length * 4);

  for (let i = 0; i < array.length; i++) {
    buffer.writeUInt32BE(array[i]! >>> 0, i * 4);
  }

  return buffer;
}

export function simpleDecodeUIntArray(buffer: Buffer) {
  const array: number[] = [];
  array.length = (buffer.length / 4) >>> 0;

  for (let i = 0; i < array.length; i++) {
    array[i] = buffer.readUInt32BE(i * 4);
  }

  return array;
}
