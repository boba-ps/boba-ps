import * as FishingGallerySettleInfo_proto from "./FishingGallerySettleInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 8538
}

export interface FishingGallerySettleNotify {
	settleInfo?: FishingGallerySettleInfo_proto.FishingGallerySettleInfo;
	galleryId?: number;
	levelId?: number;
}

