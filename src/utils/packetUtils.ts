/* eslint-disable import/no-unresolved */
import kcp from 'node-kcp';
import { Log, LogTypes } from './logging';
import { Packet } from './packet';
import * as dataUtil from './dataUtil';

export const sendPacket = async (packet: Packet, keyBlob:Buffer, initialKeyBlob:Buffer) => {
  const toSend = await dataUtil.dataToPacketData(
    packet.data,
    packet.packetID,
    keyBlob || initialKeyBlob,
  );
  packet.kcpobj.send(toSend);
  Log(`${packet.packetID} [${packet.protoName}] was sent back`, LogTypes.KCP);
};

export const convToPacket = async (
  protoname: string,
  kcpobj: kcp.KCP,
  obj: object,
) => {
  const ret = obj;
  const match = protoname.match(/([^\d]+)\d/);
  // eslint-disable-next-line no-param-reassign
  protoname = match ? match[1] : protoname;
  // eslint-disable-next-line no-return-await
  return await dataUtil.objToPacket(ret, protoname, kcpobj);
};
