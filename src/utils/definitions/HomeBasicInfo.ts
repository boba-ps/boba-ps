import * as HomeLimitedShopInfo_proto from "./HomeLimitedShopInfo"

export interface HomeBasicInfo {
	curModuleId?: number;
	curRoomSceneId?: number;
	isInEditMode?: boolean;
	exp?: number;
	level?: number;
	homeOwnerUid?: number;
	limitedShopInfo?: HomeLimitedShopInfo_proto.HomeLimitedShopInfo;
	ownerNickName?: string;
}

