/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
const MAGIC_START = 0x4567;
const MAGIC_END = 0x89ab;

export class DataPacket {
  static readonly minimumSize = 12;

  // eslint-disable-next-line no-useless-constructor
  constructor(readonly id: number, readonly metadata: Buffer, readonly data: Buffer) {}

  static decode(buffer: Buffer) {
    if (buffer.length < DataPacket.minimumSize) {
      return false;
    }

    const start = buffer.readUInt16BE();
    const id = buffer.readUInt16BE(2);
    const metadataSize = buffer.readUInt16BE(4);
    const dataSize = buffer.readUInt32BE(6);

    if (buffer.length !== DataPacket.minimumSize + metadataSize + dataSize) {
      return false;
    }

    const metadata = buffer.slice(10, 10 + metadataSize);
    const data = buffer.slice(10 + metadataSize, 10 + metadataSize + dataSize);
    const end = buffer.readUInt16BE(10 + metadataSize + dataSize);

    switch (true) {
      case start === MAGIC_START && end === MAGIC_END:
        return new DataPacket(id, metadata, data);

      default:
        return false;
    }
  }

  encode() {
    // eslint-disable-next-line max-len
    const buffer = Buffer.allocUnsafe(DataPacket.minimumSize + this.metadata.length + this.data.length);

    buffer.writeUInt16BE(MAGIC_START);
    buffer.writeUInt16BE(this.id, 2);
    buffer.writeUInt16BE(this.metadata.length, 4);
    buffer.writeUInt32BE(this.data.length, 6);
    this.metadata.copy(buffer, 10);
    this.data.copy(buffer, 10 + this.metadata.length);
    buffer.writeUInt16BE(MAGIC_END, 10 + this.metadata.length + this.data.length);

    return buffer;
  }
}
