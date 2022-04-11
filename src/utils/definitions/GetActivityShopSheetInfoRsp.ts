import * as ActivityShopSheetInfo_proto from "./ActivityShopSheetInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 742
}

export interface GetActivityShopSheetInfoRsp {
	retcode?: number;
	shopType?: number;
	sheetInfoList?: ActivityShopSheetInfo_proto.ActivityShopSheetInfo[];
}

