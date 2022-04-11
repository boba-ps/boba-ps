import * as ShopGoods_proto from "./ShopGoods"

import * as ShopMcoinProduct_proto from "./ShopMcoinProduct"

import * as ShopCardProduct_proto from "./ShopCardProduct"

import * as ShopConcertProduct_proto from "./ShopConcertProduct"

export interface Shop {
	shopType?: number;
	goodsList?: ShopGoods_proto.ShopGoods[];
	mcoinProductList?: ShopMcoinProduct_proto.ShopMcoinProduct[];
	cardProductList?: ShopCardProduct_proto.ShopCardProduct[];
	nextRefreshTime?: number;
	cityId?: number;
	cityReputationLevel?: number;
	concertProductList?: ShopConcertProduct_proto.ShopConcertProduct[];
}

