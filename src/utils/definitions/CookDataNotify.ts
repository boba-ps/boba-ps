import * as CookRecipeData_proto from "./CookRecipeData"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 156
}

export interface CookDataNotify {
	grade?: number;
	recipeDataList?: CookRecipeData_proto.CookRecipeData[];
}

