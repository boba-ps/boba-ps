import * as HomeLimitedShopInfo_proto from "./HomeLimitedShopInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4702
}

export interface HomeLimitedShopInfoRsp {
	retcode?: number;
	shopInfo?: HomeLimitedShopInfo_proto.HomeLimitedShopInfo;
}

