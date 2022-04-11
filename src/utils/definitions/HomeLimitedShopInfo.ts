import * as Vector_proto from "./Vector"

export interface HomeLimitedShopInfo {
	uid?: number;
	nextOpenTime?: number;
	nextGuestOpenTime?: number;
	nextCloseTime?: number;
	djinnPos?: Vector_proto.Vector;
	djinnRot?: Vector_proto.Vector;
}

