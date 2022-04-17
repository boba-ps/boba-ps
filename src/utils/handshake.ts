/* eslint-disable prefer-destructuring */
export class Handshake {
  public static MAGIC_CONNECT:number[] = [0xFF, 0xFFFFFFFF];

  public static MAGIC_SEND_BACK_CONV:number[] = [0x145, 0x14514545];

  public static MAGIC_DISCONNECT:number[] = [0x194, 0x19419494];

  public Magic1!:number;

  public Magic2!:number;

  public Conv!:number;

  public Token!:number;

  public Data!:number;

  public Buffer!:number|Buffer;

  // eslint-disable-next-line max-len
  public constructor(magic:number[] = [0x0, 0x0], conv:number = 0, token:number = 0, data:number = 0) {
    // @ts-expect-error
    this.Magic1 = magic[0];
    // @ts-expect-error
    this.Magic2 = magic[1];
    this.Conv = conv;
    this.Token = token;
    this.Data = data;
    this.Buffer = 0;
  }

  public decode(data:any) {
    const buffer = Buffer.from(data);
    this.Magic1 = buffer.readUInt32BE(0);
    this.Magic2 = buffer.readUint32BE(16);
    this.Conv = buffer.readUInt32BE(4);
    this.Token = buffer.readUInt32BE(8);
    this.Data = buffer.readUInt32BE(12);
    this.Buffer = buffer;
  }

  public encode() {
    const buffer = Buffer.alloc(20);
    buffer.writeUInt32BE(this.Magic1, 0);
    buffer.writeUint32BE(this.Magic2, 16);

    buffer.writeUInt32BE(1, 4);
    buffer.writeUInt32BE(1, 8);

    buffer.writeUInt32BE(this.Data, 12);

    this.Buffer = buffer;
  }
}
