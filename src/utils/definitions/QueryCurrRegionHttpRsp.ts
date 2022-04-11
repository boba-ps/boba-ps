import * as ForceUpdateInfo_proto from "./ForceUpdateInfo"

import * as StopServerInfo_proto from "./StopServerInfo"

import * as RegionInfo_proto from "./RegionInfo"

export interface QueryCurrRegionHttpRsp {
	forceUdpate?: ForceUpdateInfo_proto.ForceUpdateInfo;
	stopServer?: StopServerInfo_proto.StopServerInfo;
	retcode?: number;
	msg?: string;
	regionInfo?: RegionInfo_proto.RegionInfo;
	clientSecretKey?: Buffer;
	regionCustomConfigEncrypted?: Buffer;
	clientRegionCustomConfigEncrypted?: Buffer;
}

