import * as ItemParam_proto from "./ItemParam"

export interface ResinCard {
	baseItemList?: ItemParam_proto.ItemParam[];
	perDayItemList?: ItemParam_proto.ItemParam[];
}

export interface ShopCardProduct {
	resinCard?: ResinCard;
	productId?: string;
	priceTier?: string;
	mcoinBase?: number;
	hcoinPerDay?: number;
	days?: number;
	remainRewardDays?: number;
	cardProductType?: number;
}

