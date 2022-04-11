import * as ProductPriceTier_proto from "./ProductPriceTier"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 4124
}

export interface PlayerRechargeDataNotify {
	cardProductRemainDays?: number;
	productPriceTierList?: ProductPriceTier_proto.ProductPriceTier[];
}

