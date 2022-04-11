export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5589
}

export interface GalleryBalloonScoreNotify {
	galleryId?: number;
	uidScoreMap?: number;
}

