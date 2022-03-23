/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
import protobuf from 'protobufjs';
import packetIds from './packetIds/packetIds.json';
import { Err, Log, LogTypes } from './logging';

const pIds = packetIds as { [packetIds: string]: string };

export const switchedPacketIds = () => {
  const obj: { [key: string]: any } = {};

  Object.keys(pIds).forEach((key) => {
    obj[pIds[key]] = key;
  });

  return obj;
};

export const xorData = (data: Buffer, key: any) => {
  const ret: Buffer = Buffer.from(data);
  for (let i = 0; i < data.length; i++) {
    ret.writeUInt8(
      data.readUInt8(i) ^ key.readUInt8(i % key.length),
      i,
    );
  }
  return ret;
};
export const parsePacketData = (data: Buffer) => Buffer.from(data.slice(10))
  .slice(0, -2)
  .slice(data.readUInt8(5))
  .slice(data.readUInt8(6));
export const getProtoNameByPacketId = (packetId: string) => {
  const switchedPacketId = switchedPacketIds()[packetId];
  return switchedPacketId;
};
export const getPacketIdByProtoName = (protoName: string) => {
  const packetId = pIds[protoName];
  return packetId;
};

export const objToProtoBuffer = async (obj: object, packetID: string | number) => {
  try {
    let protoName: string;
    // spaghetti
    if (typeof packetID === 'number') {
      protoName = getProtoNameByPacketId(packetID.toString());
    } else {
      protoName = packetID;
    }
    Log(`[PID]: Got proto ${protoName}`, LogTypes.Debug);
    const root = await protobuf.load(`./protos/${protoName}.proto`);

    const testMessage = root.lookupType(protoName);
    const message = testMessage.fromObject(obj);
    return testMessage.encode(message).finish();
  } catch (e) {
    console.log(e);
  }
};

export const dataToProtobuf = async (data: Buffer, packetID: string) => {
  try {
    const protoName = getProtoNameByPacketId(packetID);

    const root = await protobuf.load(`./protos/${protoName}.proto`);

    const testMessage = root.lookupType(protoName);
    return testMessage.decode(data);
  } catch (e) {
    Err(`Error parsing packet ${getProtoNameByPacketId(packetID)}`, LogTypes.KCP);
  }
};
export const protobufToObj = async (obj: object, packetID: string) => {
  try {
    const protoName = getProtoNameByPacketId(packetID);

    const root = await protobuf.load(`./protos/${protoName}.proto`);
    const testMessage = root.lookupType(protoName);
    return testMessage.toObject(testMessage.create(obj));
  } catch (e: Error | any) {
    Err(e.message, LogTypes.Http);
  }
};
export const reformatKcpPacket = (message: Buffer) => {
  let i = 0;
  let tokenSizeTotal = 0;
  const messages = [];
  while (i < message.length) {
    const convId = message.readUInt32BE(i);
    const remainingHeader = message.subarray(i + 8, i + 28);
    const contentLen = message.readUInt32LE(i + 24);
    const content = message.subarray(i + 28, i + 28 + contentLen);

    const formattedMessage = Buffer.alloc(24 + contentLen);
    formattedMessage.writeUInt32BE(convId, 0);
    remainingHeader.copy(formattedMessage, 4);
    content.copy(formattedMessage, 24);
    i += 28 + contentLen;
    tokenSizeTotal += 4;
    messages.push(formattedMessage);
  }
  return Buffer.concat(messages, message.length - tokenSizeTotal);
};

export const dataToPacketData = async (
  data: Buffer,
  packetID: number,
  keyBuffer: Buffer,
) => {
  const magic2 = Buffer.from(0x89AB.toString(16), 'hex');
  const part1 = Buffer.alloc(10);
  const metadata = await objToProtoBuffer({ sent_ms: Date.now() }, 13371337);
  part1.writeUInt16BE(0x4567, 0);
  part1.writeUInt16BE(packetID, 2);
  part1.writeUInt8(metadata!.length, 5);
  part1.writeUInt16BE(data.length, 8);

  const ret = Buffer.concat([part1, metadata!, data, magic2], part1.length + metadata!.length + data.length + magic2.length);
  xorData(ret, keyBuffer);
  return ret;
};
export const formatPacket = async (data: Buffer, token: number) => {
  let i = 0;
  const msgs = [];
  while (i < data.length) {
    const conv = data.readUInt32BE(i);
    const contentLen = data.readUInt32LE(i + 20);
    const newStart = Buffer.alloc(8);
    newStart.writeUInt32BE(conv, 0);
    newStart.writeUInt32BE(token, 4);

    const slice = data.subarray(i + 4, i + 24 + contentLen);
    const concat = Buffer.concat([newStart, slice]);
    msgs.push(concat);
    i += contentLen + 24;
  }
  return msgs;
};

export const isValidPacket = (data: Buffer) => (
  data.length > 5
    && data.readInt16BE(0) === 0x4567
    && data.readUInt16BE(data.byteLength - 2) === 0x89ab
);
