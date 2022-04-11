import * as HomeLimitedShopGoods_proto from "./HomeLimitedShopGoods"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4489
}

export interface HomeLimitedShopBuyGoodsRsp {
	retcode?: number;
	goods?: HomeLimitedShopGoods_proto.HomeLimitedShopGoods;
	buyCount?: number;
	goodsList?: HomeLimitedShopGoods_proto.HomeLimitedShopGoods[];
}

