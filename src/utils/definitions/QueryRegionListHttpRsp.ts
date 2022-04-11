import * as RegionSimpleInfo_proto from "./RegionSimpleInfo"

export interface QueryRegionListHttpRsp {
	retcode?: number;
	regionList?: RegionSimpleInfo_proto.RegionSimpleInfo[];
	clientSecretKey?: Buffer;
	clientCustomConfigEncrypted?: Buffer;
	enableLoginPc?: boolean;
}

