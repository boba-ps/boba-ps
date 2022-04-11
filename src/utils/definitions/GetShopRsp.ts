import * as Shop_proto from "./Shop"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 718
}

export interface GetShopRsp {
	retcode?: number;
	shop?: Shop_proto.Shop;
}

