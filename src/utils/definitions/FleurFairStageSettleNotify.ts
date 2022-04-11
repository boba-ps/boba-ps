import * as FleurFairGallerySettleInfo_proto from "./FleurFairGallerySettleInfo"

import * as FleurFairBossSettleInfo_proto from "./FleurFairBossSettleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5331
}

export interface FleurFairStageSettleNotify {
	gallerySettleInfo?: FleurFairGallerySettleInfo_proto.FleurFairGallerySettleInfo;
	bossSettleInfo?: FleurFairBossSettleInfo_proto.FleurFairBossSettleInfo;
	stageType?: number;
}

