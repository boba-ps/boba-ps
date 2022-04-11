export enum CmdId {
	NONE = 0,
	ENET_CHANNEL_ID = 0,
	ENET_IS_RELIABLE = 1,
	CMD_ID = 5518
}

export interface GalleryBalloonShootNotify {
	galleryId?: number;
	addScore?: number;
	combo?: number;
	comboDisableTime?: number;
	curScore?: number;
	triggerEntityId?: number;
}

