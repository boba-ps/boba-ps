import * as GalleryFlowerStartParam_proto from "./GalleryFlowerStartParam"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5549
}

export interface GalleryStartNotify {
	flowerStartParam?: GalleryFlowerStartParam_proto.GalleryFlowerStartParam;
	galleryId?: number;
	endTime?: number;
	playerCount?: number;
}

