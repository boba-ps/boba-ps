import protobuf from 'protobufjs';

import cur from './cur.json';

export default async () => {
  const queryRegionList = cur['2.1'][2];
  const root = protobuf.load(
    './protos/QueryCurrRegionHttpRsp.proto',
  );
  const testMessage = (await root!).lookupType(
    'QueryCurrRegionHttpRsp',
  );

  const pQuery = testMessage!
    .decode(Buffer.from(queryRegionList, 'base64'))
    .toJSON();

  pQuery.regionInfo.gateserverIp = '127.0.0.1';

  const encoded = testMessage!.encode(pQuery).finish();
  return encoded;
};
