import * as ShopGoods_proto from "./ShopGoods"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 784
}

export interface BuyGoodsRsp {
	retcode?: number;
	shopType?: number;
	goods?: ShopGoods_proto.ShopGoods;
	buyCount?: number;
	goodsList?: ShopGoods_proto.ShopGoods[];
}

