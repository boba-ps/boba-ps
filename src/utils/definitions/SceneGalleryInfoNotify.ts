import * as SceneGalleryInfo_proto from "./SceneGalleryInfo"

export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5536
}

export interface SceneGalleryInfoNotify {
	galleryInfo?: SceneGalleryInfo_proto.SceneGalleryInfo;
}

