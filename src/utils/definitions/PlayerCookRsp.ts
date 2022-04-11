import * as CookRecipeData_proto from "./CookRecipeData"

import * as ItemParam_proto from "./ItemParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 180
}

export interface PlayerCookRsp {
	retcode?: number;
	recipeData?: CookRecipeData_proto.CookRecipeData;
	itemList?: ItemParam_proto.ItemParam[];
	qteQuality?: number;
	cookCount?: number;
	extralItemList?: ItemParam_proto.ItemParam[];
}

