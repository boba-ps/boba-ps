import * as ShopMcoinProduct_proto from "./ShopMcoinProduct"

import * as ShopCardProduct_proto from "./ShopCardProduct"

import * as PlayProduct_proto from "./PlayProduct"

import * as ShopConcertProduct_proto from "./ShopConcertProduct"

export enum CmdId {
	ENET_CHANNEL_ID = 0,
	NONE = 0,
	ENET_IS_RELIABLE = 1,
	IS_ALLOW_CLIENT = 1,
	CMD_ID = 4103
}

export interface RechargeReq {
	mcoinProduct?: ShopMcoinProduct_proto.ShopMcoinProduct;
	cardProduct?: ShopCardProduct_proto.ShopCardProduct;
	playProduct?: PlayProduct_proto.PlayProduct;
	concertProduct?: ShopConcertProduct_proto.ShopConcertProduct;
}

