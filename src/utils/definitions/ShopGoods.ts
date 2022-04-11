import * as ItemParam_proto from "./ItemParam"

export interface ShopGoods {
	goodsId?: number;
	goodsItem?: ItemParam_proto.ItemParam;
	scoin?: number;
	hcoin?: number;
	costItemList?: ItemParam_proto.ItemParam[];
	boughtNum?: number;
	buyLimit?: number;
	beginTime?: number;
	endTime?: number;
	nextRefreshTime?: number;
	minLevel?: number;
	maxLevel?: number;
	preGoodsIdList?: number[];
	mcoin?: number;
	disableType?: number;
	secondarySheetId?: number;
	discountId?: number;
	discountBeginTime?: number;
	discountEndTime?: number;
	singleLimit?: number;
}

