import * as ItemParam_proto from "./ItemParam"

export interface HomeLimitedShopGoods {
	goodsId?: number;
	goodsItem?: ItemParam_proto.ItemParam;
	costItemList?: ItemParam_proto.ItemParam[];
	boughtNum?: number;
	buyLimit?: number;
}

